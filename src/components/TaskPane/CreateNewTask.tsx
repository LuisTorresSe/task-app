import { FormTask } from "./FormTask";
import { Tasks } from "../../types";

interface Props {
  stateForm: boolean;
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
  idBoard: number;
}

export function CreateNewTask({
  stateForm,
  idBoard,
  handleStateForm,
  handleNewTask,
}: Props) {
  return (
    <div>
      <button onClick={() => handleStateForm(true)}> +Add New Task</button>
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
