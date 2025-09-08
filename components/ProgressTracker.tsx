// components/ProgressTracker.tsx

'use client'; 

import { useEffect, useState } from 'react';

// --- DND-KIT IMPORTS ---
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

// --- LOCAL IMPORTS ---
import { useProgressStore } from '../store/progressStore';
import { AddProgressForm } from './AddProgressForm';
import { ErrorBanner } from './ErrorBanner';
import { ProgressItem } from './ProgressItem';

// --- FIX: Define a specific type for the data being migrated from localStorage.
interface OldProgressItem {
  id: string;
  name: string;
  startingPage: number;
  currentPage: number;
  targetPage: number;
  // This old type might not have a `position` field.
}

export const ProgressTracker = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState('');

  const { progressItems, fetchItems, deleteItem, updateItem, reorderItems } = useProgressStore();

  // --- DND-KIT SENSORS AND HANDLER ---
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderItems(active.id as string, over.id as string);
    }
  }
  
  useEffect(() => { setIsClient(true); }, []);
  
  useEffect(() => {
    const initialize = async () => {
      const oldDataRaw = localStorage.getItem('progress-storage');
      const hasMigrated = localStorage.getItem('migratedToDB');
      
      if (oldDataRaw && !hasMigrated) {
        setFeedback('Migrating your local progress to the cloud...');
        const oldState = JSON.parse(oldDataRaw);
        

        const oldItems: OldProgressItem[] = oldState?.state?.progressItems || [];
        
        if (oldItems.length > 0) {
          // The 'item' type is now correctly inferred.
          await Promise.all(oldItems.map((item) => 
            fetch('/api/progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(item),
            })
          ));
        }
        localStorage.setItem('migratedToDB', 'true');
        localStorage.removeItem('progress-storage');
      }

      setFeedback('Fetching your progress...');
      try {
        await fetchItems();
      } catch (error) {
        console.error("Failed to fetch items:", error);
        setFeedback('Could not connect to the server.');
      } finally {
        setIsLoading(false);
        setFeedback('');
      }
    };

    if (isClient) {
      initialize();
    }
  }, [isClient, fetchItems]);
  

  if (isLoading || feedback) {
    return <div className="text-center p-10">{feedback || 'Loading...'}</div>;
  }

  return (
    <>
      <ErrorBanner />
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">My Progress Tracker</h1>
          <p className="text-slate-500 mt-2">Keep track of your reading and learning goals.</p>
        </header>
        
        <AddProgressForm />

        <div className="mt-8">
          {progressItems.length > 0 ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={progressItems}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-4">
                  {progressItems.map((item) => (
                    <ProgressItem
                      key={item.id}
                      item={item}
                      onUpdate={updateItem}
                      onDelete={deleteItem}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

          ) : (
            <p className="text-center text-slate-500 bg-slate-50 p-6 rounded-lg">
              No items yet. Add one above to get started!
            </p>
          )}
        </div>
      </div>
    </>
  );
};