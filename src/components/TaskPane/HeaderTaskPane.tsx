import { CreateNewTask } from "./CreateNewTask";
import { IBoard, Tasks } from "../../types";
import styles from "../TaskPane/HeaderTaskPane.module.css";
interface Props {
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;

  stateForm: boolean;
  board: IBoard;
}

export function HeaderTaskPane({
  stateForm,
  board,
  handleStateForm,
  handleNewTask,
}: Props) {
  return (
    <div className={styles.headerTaskPane}>
      {" "}
      <p>PlatformLaunch</p>{" "}
      <CreateNewTask
        stateForm={stateForm}
        board={board}
        handleStateForm={handleStateForm}
        handleNewTask={handleNewTask}
      />
    </div>
  );
}
