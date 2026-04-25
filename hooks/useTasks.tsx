"use client";

import { useEffect, useState } from "react";
import { Task } from "@/types/task";

type Filter = "all" | "pending" | "completed";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      status: "pending",
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "pending" ? "completed" : "pending" }
          : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return {
    tasks: filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
    filter, 
    setFilter,
  };
}
