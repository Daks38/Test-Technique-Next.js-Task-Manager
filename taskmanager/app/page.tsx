"use client";

import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-950/70 border border-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur">
        <header className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Task Manager
          </h1>
          <span className="text-xs text-gray-500">
            <TaskInput />
          </span>
        </header>

        <div className="flex items-center gap-2 mt-5">
          <TaskList />
        </div>
      </div>
    </main>
  );
}
