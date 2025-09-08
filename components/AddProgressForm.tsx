// components/AddProgressForm.tsx

'use client';

import React, { useState } from 'react';
import { useProgressStore } from '../store/progressStore';

export const AddProgressForm = () => {
  const [name, setName] = useState('');
  const [startingPage, setStartingPage] = useState('1'); // <-- ADDED (default to 1)
  const [currentPage, setCurrentPage] = useState('');
  const [targetPage, setTargetPage] = useState('');

  const addItem = useProgressStore((state) => state.addItem)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const start = parseInt(startingPage); // <-- ADDED
    const current = parseInt(currentPage);
    const target = parseInt(targetPage);

    if (name && !isNaN(start) && !isNaN(current) && !isNaN(target) && target >= start) {
      addItem({ name, startingPage: start, currentPage: current, targetPage: target }); // <-- UPDATED
      // Reset form
      setName('');
      setStartingPage(''); // <-- ADDED
      setCurrentPage('');
      setTargetPage('');
    } else {
      alert('Please fill in all fields. Target page must be greater than or equal the starting page.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-slate-700">Add New Item</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., 'Chapter 5: Advanced Hooks'"
          className="p-2 border rounded-md w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            value={startingPage}
            onChange={(e) => setStartingPage(e.target.value)}
            placeholder="Starting Page"
            className="p-2 border rounded-md"
            min="0"
          />
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            placeholder="Current Page"
            className="p-2 border rounded-md"
            min="0"
          />
          <input
            type="number"
            value={targetPage}
            onChange={(e) => setTargetPage(e.target.value)}
            placeholder="Target Page"
            className="p-2 border rounded-md"
            min="1"
          />
        </div>
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
        Add Progress
      </button>
    </form>
  );
};