// store/progressStore.ts
import { arrayMove } from "@dnd-kit/sortable";
import { create } from "zustand";

// The interface stays the same, but 'id' is now a string from the DB
export interface ProgressItem {
  id: string;
  name: string;
  startingPage: number;
  currentPage: number;
  targetPage: number;
  position: number;
}

interface ProgressState {
  progressItems: ProgressItem[];
  error: string | null;
  setError: (message: string | null) => void;
  fetchItems: () => Promise<void>;
  addItem: (item: Omit<ProgressItem, 'id' | 'position'>) => Promise<void>;
  updateItem: (id: string, updatedItem: Partial<ProgressItem>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  setItems: (items: ProgressItem[]) => void; // For initial hydration
  reorderItems: (activeId: string, overId: string) => void;
}

export const useProgressStore = create<ProgressState>()((set, get) => ({
  progressItems: [],
  error: null,

  setItems: (items) => set({ progressItems: items }),
  setError: (message) => {
    set({ error: message });
    setTimeout(() => {
      set({ error: null });
    }, 5000);
  },

  fetchItems: async () => {
    try {
      const response = await fetch("/api/progress");
      if (!response.ok) throw new Error("Failed to fetch items.");
      const items = await response.json();
      set({ progressItems: items });
    } catch (e) {
      get().setError("Could not load progress. Please check your connection.");
    }
  },

  addItem: async (item) => {
    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const newItem = await response.json();
      set((state) => ({ progressItems: [...state.progressItems, newItem] }));
    } catch (e) {
      get().setError("Could not add item. Please check your connection.");
    }
  },

  updateItem: async (id, itemUpdate) => {
    // Get the full item to send to the server

    try {
      const itemToUpdate = get().progressItems.find((p) => p.id === id);
      if (!itemToUpdate) return;

      const response = await fetch(`/api/progress/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...itemToUpdate, ...itemUpdate }),
      });
      const updatedItem = await response.json();
      set((state) => ({
        progressItems: state.progressItems.map((item) =>
          item.id === id ? updatedItem : item
        ),
      }));
    } catch (e) {
      get().setError("Could not update item. Please check your connection.");
      // Re-fetch to ensure UI consistency if needed
      await get().fetchItems();
    }
  },

  deleteItem: async (id) => {
    try {
      await fetch(`/api/progress/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        progressItems: state.progressItems.filter((item) => item.id !== id),
      }));
    } catch (e) {
      get().setError("Could not delete item. Please check your connection.");
    }
  },
  reorderItems: async (activeId, overId) => {
    // Step 1: Optimistically update the UI for a smooth experience
    const items = get().progressItems;
    const oldIndex = items.findIndex((item) => item.id === activeId);
    const newIndex = items.findIndex((item) => item.id === overId);

    const reorderedItems = arrayMove(items, oldIndex, newIndex);
    set({ progressItems: reorderedItems });

    // Step 2: Send the new order to the server
    try {
      const orderedIds = reorderedItems.map((item) => item.id);
      await fetch("/api/progress/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderedIds }),
      });
    } catch (e) {
      get().setError("Could not save new order. Reverting.");
      set({ progressItems: items }); // Revert on failure
    }
  },
}));
