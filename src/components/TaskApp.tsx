import { IBoard, Tasks } from "../types";
import { useState, useEffect } from "react";
import { SideBar } from "./SideBar/SideBar";
import { PlatformLaunch } from "../components/TaskPane/PlatformLaunch";
import styled from "styled-components";
const INITIAl_STATE: IBoard[] = [
  {
    name: "Tareas del hogar",
    id: 1,
    columns: ["todo", "doing", "done"],
    tasks: [
      {
        title: "Lavar la ropa",
        description: "No tengo ropa para ir de viaje",
        id: `1task1`,
        status: "todo",
      },
      {
        title: "Ordenar cuarto",
        description: "paz mental",
        id: `1task2`,
        status: "doing",
      },
    ],
  },
  {
    name: "Tareas del universidad",
    id: 2,
    columns: ["todo", "doing", "done"],
    tasks: [],
  },
  {
    name: "Tareas del trabajo",
    id: 3,
    columns: ["todo", "doing", "done"],
    tasks: [],
  },
];
interface TaskAppState {
  boards: IBoard[];
  countBoard: number;
  select: number;
  board: IBoard;
  tasks: Tasks[];
  modeDark: boolean;
  visible: boolean;
}

export function TaskApp() {
  const [boards, setBoards] = useState<TaskAppState["boards"]>(INITIAl_STATE);
  const [board, setBoard] = useState<TaskAppState["board"]>(INITIAl_STATE[0]);
  const [countBoards, setCountBoards] = useState<TaskAppState["countBoard"]>(3);
  const [selectBoard, setSelectBoard] = useState<TaskAppState["select"]>(1);
  const [modeDark, setModeDark] = useState<TaskAppState["modeDark"]>(false);
  const [visible, setVisible] = useState<TaskAppState["visible"]>(false);
  const handleListBoard = (board: IBoard) => {
    setBoards([...boards, board]);
  };
  const handleCountBoard = (newCount: number) => {
    setCountBoards(newCount);
  };

  const handleSelectBoard = (select: number) => {
    setSelectBoard(select);
    const boardSelected = boards.find((board) => board.id === select) as IBoard;
    setBoard(boardSelected);
  };

  const handleNewTask = (newTask: Tasks) => {
    const listTask = board.tasks;
    const updateBoards = boards.map((board) => {
      if (board.id === selectBoard) {
        return {
          ...board,
          tasks: [...listTask, newTask],
        };
      }
      return board;
    });
    setBoards(updateBoards);
  };

  const handleUpdateStatusTask = (
    newStatus: string,
    idTask: string,
    idBoard: number
  ) => {
    const updateStatusTasks = board.tasks.map((task) => {
      if (task.id === idTask) {
        return { ...task, status: `${newStatus}` };
      }
      return task;
    });

    const updateBoards = boards.map((board) => {
      if (board.id === idBoard) {
        return { ...board, tasks: updateStatusTasks };
      }
      return board;
    });

    setBoards(updateBoards);
  };

  useEffect(() => {
    handleSelectBoard(selectBoard);
  });
  console.log(visible);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <ContainerTaskApp>
      <SideBar
        handleListBoard={handleListBoard}
        handleCountBoard={handleCountBoard}
        handleSelectBoard={handleSelectBoard}
        countBoards={countBoards}
        boards={boards}
        selectBoard={selectBoard}
        visible={visible}
      />
      <PlatformLaunch
        visible={visible}
        board={board}
        handleNewTask={handleNewTask}
        handleUpdateStatusTask={handleUpdateStatusTask}
        handleVisible={handleVisible}
      />
    </ContainerTaskApp>
  );
}

const ContainerTaskApp = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: auto;
  height: 80%;
  background-color: aquamarine;

  @media (min-width: 912px) {
  }
`;
