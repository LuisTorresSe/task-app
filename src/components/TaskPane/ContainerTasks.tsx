import { IBoard, Tasks } from "../../types";
import { Task } from "../TaskPane/Task";
import styles from "./ContainerTasks.module.css";
interface Props {
  tasks: Tasks[];
  status: string;
  handleUpdateStatusTask: (
    newstatus: string,
    idTask: string,
    idBoard: number
  ) => void;
  board: IBoard;
}

export function ContainerTasks({
  tasks,
  status,
  board,
  handleUpdateStatusTask,
}: Props) {
  const { id } = board;
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const idTask: string = e.dataTransfer.getData("text");
    handleUpdateStatusTask(status, idTask, id);
  };

  return (
    <div
      className={styles.containerTasks}
      onDrop={handleOnDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {tasks.map((task) => {
        return task.status === status ? (
          <Task task={task} key={task.id} />
        ) : null;
      })}
    </div>
  );
}
