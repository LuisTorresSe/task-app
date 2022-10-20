import { FormTask } from "./FormTask";
import { IBoard, Tasks } from "../../types";
import styles from "./CreateNewTask.module.css";
interface Props {
  stateForm: boolean;
  board: IBoard;
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
}

export function CreateNewTask({
  stateForm,
  board,
  handleStateForm,
  handleNewTask,
}: Props) {
  return (
    <div className={styles.containerCreateTask}>
      <button
        onClick={() => handleStateForm(true)}
        className={styles.btnCreateTask}
      >
        +Add New Task
      </button>
      {
        <div className={stateForm ? "background" : ""}>
          {stateForm ? (
            <FormTask
              board={board}
              handleStateForm={handleStateForm}
              handleNewTask={handleNewTask}
            />
          ) : null}
        </div>
      }
    </div>
  );
}
