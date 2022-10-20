import { Tasks } from "../../types";
import { Task } from "../TaskPane/Task";
import styles from "./ContainerTasks.module.css";
interface Props {
  tasks: Tasks[];
  status: string;
}

export function ContainerTasks({ tasks, status }: Props) {
  return (
    <div className={styles.containerTasks}>
      {tasks.map((task) => {
        return task.status === status ? (
          <Task task={task} key={task.id} />
        ) : null;
      })}
    </div>
  );
}
