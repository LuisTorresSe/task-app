export type status = "todo" | "doing" | "done";
export interface IBoard {
  name: string;
  id: number;
  columns: status[];
}
