import { FormTask } from "./FormTask";
import { Tasks } from "../../types";
import styles from "./CreateNewTask.module.css";
interface Props {
  stateForm: boolean;
  idBoard: number;
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
}

export function CreateNewTask({
  stateForm,
  idBoard,
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
              handleStateForm={handleStateForm}
              handleNewTask={handleNewTask}
              idBoard={idBoard}
            />
          ) : null}
        </div>
      }
    </div>
  );
}
