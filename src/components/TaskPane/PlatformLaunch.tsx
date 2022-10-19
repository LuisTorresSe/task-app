import { useState } from "react";
import { IBoard, Tasks } from "../../types";
import { HeaderTaskPane } from "./HeaderTaskPane";
import { TaskPane } from "./TaskPane";

interface Props {
  board: IBoard;
  handleNewTask: (newTask: Tasks) => void;
}
interface PlatformLaunchState {
  stateForm: boolean;
  tasks: Tasks[];
}

export function PlatformLaunch({ board, handleNewTask }: Props) {
  const [stateForm, setStateForm] =
    useState<PlatformLaunchState["stateForm"]>(false);

  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };

  return (
    <div>
      <HeaderTaskPane
        stateForm={stateForm}
        handleStateForm={handleStateForm}
        idBoard={board?.id}
        handleNewTask={handleNewTask}
      />
      <TaskPane board={board} />
    </div>
  );
}
