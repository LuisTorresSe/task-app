import { Tasks } from "../../types";
import styles from "./Task.module.css";
interface Props {
  task: Tasks;
}

export function Task({ task }: Props) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${task.id}`);
    console.log(task.id);
  };

  return (
    <div
      className={styles.containerTask}
      draggable
      onDragStart={handleDragStart}
    >
      <p className={styles.title}> {task.title}</p>
      <p className={styles.description}>{task.description}</p>
    </div>
  );
}
