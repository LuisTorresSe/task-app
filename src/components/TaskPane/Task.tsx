import { Tasks } from "../../types";
import styles from "./Task.module.css";
interface Props {
  task: Tasks;
}

export function Task({ task }: Props) {
  return (
    <div className={styles.containerTask}>
      <p className={styles.title}> {task.title}</p>
      <p className={styles.description}>{task.description}</p>
    </div>
  );
}
