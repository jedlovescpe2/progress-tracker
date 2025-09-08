// components/ErrorBanner.tsx
'use client';
import { useProgressStore } from "@/store/progressStore";

export const ErrorBanner = () => {
  const { error, setError } = useProgressStore();

  if (!error) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-md shadow-lg z-50 flex items-center gap-4">
      <span>{error}</span>
      <button onClick={() => setError(null)} className="font-bold text-lg">&times;</button>
    </div>
  );
};