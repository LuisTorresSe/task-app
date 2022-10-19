import { CreateNewTask } from "./CreateNewTask";
import { Tasks } from "../../types";
interface Props {
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
  stateForm: boolean;
  idBoard: number;
}

export function HeaderTaskPane({
  stateForm,
  idBoard,
  handleStateForm,
  handleNewTask,
}: Props) {
  return (
    <div>
      {" "}
      <p>PlatformLaunch</p>{" "}
      <CreateNewTask
        stateForm={stateForm}
        handleStateForm={handleStateForm}
        idBoard={idBoard}
        handleNewTask={handleNewTask}
      />
    </div>
  );
}
