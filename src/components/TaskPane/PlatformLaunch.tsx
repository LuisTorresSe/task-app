import { useState } from "react";
import { Tasks, IBoard } from "../../types";
import { HeaderTaskPane } from "./HeaderTaskPane";
import { TaskPane } from "./TaskPane";
import styles from "../TaskPane/PlatformLaunch.module.css";
interface Props {
  board: IBoard;
  handleNewTask: (newTask: Tasks) => void;
  handleUpdateStatusTask: (
    newstatus: string,
    idTask: string,
    idBoard: number
  ) => void;
}
interface PlatformLaunchState {
  stateForm: boolean;
  tasks: Tasks[];
}

export function PlatformLaunch({
  board,
  handleNewTask,
  handleUpdateStatusTask,
}: Props) {
  const [stateForm, setStateForm] =
    useState<PlatformLaunchState["stateForm"]>(false);

  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };

  return (
    <div className={styles.PlatformLaunch}>
      <HeaderTaskPane
        stateForm={stateForm}
        handleStateForm={handleStateForm}
        handleNewTask={handleNewTask}
        board={board}
      />
      <TaskPane board={board} handleUpdateStatusTask={handleUpdateStatusTask} />
    </div>
  );
}
