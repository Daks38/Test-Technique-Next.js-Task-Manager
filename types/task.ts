export interface Task {
  id: string;
  text: string;
  status: "pending" | "completed";
}
