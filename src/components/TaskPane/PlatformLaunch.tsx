import { useState } from "react";
import { Tasks, IBoard } from "../../types";
import { HeaderTaskPane } from "./HeaderTaskPane";
import { TaskPane } from "./TaskPane";
import styled from "styled-components";

interface Props {
  board: IBoard;
  visible: boolean;
  handleNewTask: (newTask: Tasks) => void;
  handleUpdateStatusTask: (
    newstatus: string,
    idTask: string,
    idBoard: number
  ) => void;
  handleVisible: () => void;
}
interface PlatformLaunchState {
  stateForm: boolean;
  tasks: Tasks[];
}

export function PlatformLaunch({
  board,
  visible,
  handleVisible,
  handleNewTask,
  handleUpdateStatusTask,
}: Props) {
  const [stateForm, setStateForm] =
    useState<PlatformLaunchState["stateForm"]>(false);

  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };

  return (
    <ContainerPlatformLaunch>
      <HeaderTaskPane
        visible={visible}
        stateForm={stateForm}
        handleStateForm={handleStateForm}
        handleNewTask={handleNewTask}
        board={board}
        handleVisible={handleVisible}
      />
      <TaskPane board={board} handleUpdateStatusTask={handleUpdateStatusTask} />
    </ContainerPlatformLaunch>
  );
}

const ContainerPlatformLaunch = styled.div`
  width: 80%;
  height: 100%;

  @media (max-width: 912px) {
    width: 100%;
  }
`;
