export interface IBoard {
  name: string;
  id: number;
  columns: string[];
  tasks: Tasks[];
}
export type Tasks = {
  title: string;
  description: string;
  id: string;
  status: string;
};
