import { IBoard } from "../../types";
import { ContainerTasks } from "./ContainerTasks";
import styles from "./TaskPane.module.css";
interface Props {
  board: IBoard | undefined;
}

export function TaskPane({ board }: Props) {
  return (
    <div className={styles.containerTaskPane}>
      {board?.columns.map((status) => {
        return (
          <div className={styles.containerDragAndDrop} key={status}>
            {" "}
            <p>{status}</p>
            <ContainerTasks tasks={board.tasks} status={status} />
          </div>
        );
      })}
    </div>
  );
}
