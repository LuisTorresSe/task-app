import { IBoard } from "../../types";
import { ContainerTasks } from "./ContainerTasks";
import styles from "./TaskPane.module.css";
interface Props {
  board: IBoard;
  handleUpdateStatusTask: (
    newstatus: string,
    idTask: string,
    idBoard: number
  ) => void;
}

export function TaskPane({ board, handleUpdateStatusTask }: Props) {
  return (
    <div className={styles.containerTaskPane}>
      {board?.columns.map((status) => {
        return (
          <div className={styles.containerDragAndDrop} key={status}>
            {" "}
            <p>{status}</p>
            <ContainerTasks
              tasks={board.tasks}
              status={status}
              board={board}
              handleUpdateStatusTask={handleUpdateStatusTask}
            />
          </div>
        );
      })}
    </div>
  );
}
