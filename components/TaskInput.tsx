"use client";

import { useState } from "react";

interface TaskInputProps {
  onAdd: (text: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="flex gap-2 mt-6">
      <input
        className="flex-1 px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Ajouter une tâche..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Ajouter
      </button>
    </div>
  );
}
