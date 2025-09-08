// components/ProgressItem.tsx

"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect, useState } from "react";
import { ProgressItem as ProgressItemType } from "../store/progressStore";

// A simple spinner SVG component
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

interface Props {
  item: ProgressItemType;
  onUpdate: (id: string, updatedItem: Partial<ProgressItemType>) => void;
  onDelete: (id: string) => void;
}

export const ProgressItem = ({ item, onUpdate, onDelete }: Props) => {
  // --- DND-KIT HOOK ---
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  // --- END DND-KIT HOOK ---

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [editName, setEditName] = useState(item.name);
  const [editStart, setEditStart] = useState(item.startingPage.toString());
  const [editCurrent, setEditCurrent] = useState(item.currentPage.toString());
  const [editTarget, setEditTarget] = useState(item.targetPage.toString());

  const [quickCurrentPage, setQuickCurrentPage] = useState(
    item.currentPage.toString()
  );

  useEffect(() => {
    setQuickCurrentPage(item.currentPage.toString());
  }, [item.currentPage]);

  const pagesToRead = item.targetPage - item.startingPage;
  const pagesRead = item.currentPage - item.startingPage;

  let percentage = 0;
  if (pagesToRead > 0) {
    percentage = Math.round((pagesRead / pagesToRead) * 100);
  } else if (item.currentPage >= item.targetPage) {
    percentage = 100;
  }
  percentage = Math.max(0, Math.min(100, percentage));

  const isCompleted = percentage === 100;
  const borderColor = isCompleted ? "border-green-500" : "border-blue-500";
  const barColor = isCompleted ? "bg-green-500" : "bg-blue-500";
  const textColor = isCompleted ? "text-green-600" : "text-blue-600";

  const handleSave = () => {
    const start = parseInt(editStart);
    const current = parseInt(editCurrent);
    const target = parseInt(editTarget);

    if (
      editName &&
      !isNaN(start) &&
      !isNaN(current) &&
      !isNaN(target) &&
      target >= start
    ) {
      onUpdate(item.id, {
        name: editName,
        startingPage: start,
        currentPage: current,
        targetPage: target,
      });
      setIsEditing(false);
    } else {
      alert(
        "Please provide valid values. Target must be greater than or equal to start."
      );
    }
  };
  const handleQuickUpdate = async () => {
    const newCurrentPage = parseInt(quickCurrentPage);
    if (!isNaN(newCurrentPage) && !isUpdating) {
      setIsUpdating(true);
      try {
        await onUpdate(item.id, { currentPage: newCurrentPage });
      } catch (error) {
        console.error("Update failed:", error);
        // Optionally revert or show an error message
      } finally {
        setIsUpdating(false);
      }
    }
  };
  // --- NEW: Handle 'Enter' key press on the input ---
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleQuickUpdate();
      // Blur the input to show the action is complete
      event.currentTarget.blur();
    }
  };
  // --- END OF NEW HANDLER ---

  if (isEditing) {
    // The full edit form remains unchanged
    return (
      <div

        className={`bg-white p-4 rounded-lg shadow-md ...`} // The rest of your classes
      >
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Start"
            value={editStart}
            onChange={(e) => setEditStart(e.target.value)}
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Current"
            value={editCurrent}
            onChange={(e) => setEditCurrent(e.target.value)}
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Target"
            value={editTarget}
            onChange={(e) => setEditTarget(e.target.value)}
            className="w-1/3 p-2 border rounded"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-3 py-1 text-sm rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${borderColor} transition-colors duration-300`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          {isCompleted && <span className="text-green-500">✅</span>}
          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              {item.name}
            </h3>
            <p className="text-sm text-slate-500">
              Page {item.currentPage} of {item.targetPage} (Starts at{" "}
              {item.startingPage})
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 text-white px-3 py-1 text-sm rounded hover:bg-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>

      {!isCompleted && !isEditing && (
        <div className="mt-4 flex items-center gap-2">
          <label
            htmlFor={`quick-update-${item.id}`}
            className="text-sm font-medium text-slate-600"
          >
            Set Current Page:
          </label>
          <input
            id={`quick-update-${item.id}`}
            type="number"
            value={quickCurrentPage}
            onChange={(e) => setQuickCurrentPage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isUpdating}
            className="p-1 border rounded-md w-20 text-center"
          />
          <button
            onClick={handleQuickUpdate}
            disabled={isUpdating}
            // --- CHANGED: Updated styles for a cleaner hover effect ---
            className="p-1.5 text-blue-600 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Update current page"
          >
            {isUpdating ? (
              <Spinner />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            )}
          </button>
        </div>
      )}

      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-slate-600">Progress</span>
          <span className={`text-sm font-medium ${textColor}`}>
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${barColor} transition-colors duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
