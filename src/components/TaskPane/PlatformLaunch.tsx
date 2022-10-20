import { useState } from "react";
import { Tasks, IBoard } from "../../types";
import { HeaderTaskPane } from "./HeaderTaskPane";
import { TaskPane } from "./TaskPane";
import styles from "../TaskPane/PlatformLaunch.module.css";
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
    <div className={styles.PlatformLaunch}>
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
