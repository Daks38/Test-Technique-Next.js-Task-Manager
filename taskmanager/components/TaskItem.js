"use client";


export default function TaskItem() {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg shadow-sm transition hover:border-gray-500">
      <button className="flex items-center gap-3 flex-1 text-left"></button>

      <button className="ml-3 text-red-400 hover:text-red-500 transition text-sm">
        Supprimer
      </button>
    </div>
  );
}
