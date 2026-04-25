"use client";


export default function TaskInput() {

  return (
    <div className="flex gap-2 mt-6">
      <input
        className="flex-1 px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Ajouter une tâche..."
      />
      <button
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Ajouter
      </button>
    </div>
  );
}
