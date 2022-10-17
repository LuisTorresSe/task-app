import { IBoard } from "../../types";
import { ContainerTasks } from "./ContainerTasks";
interface Props {
  board: IBoard | undefined;
}

export function TaskPane({ board }: Props) {
  return (
    <div>
      {board?.columns.map((status) => {
        return (
          <div key={status}>
            {" "}
            <p>{status}</p>
            <ContainerTasks tasks={board.tasks} status={status} />
          </div>
        );
      })}
    </div>
  );
}
