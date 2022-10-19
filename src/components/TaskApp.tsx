import { IBoard, Tasks } from "../types";
import { useState, useEffect } from "react";
import { SideBar } from "./SideBar/SideBar";
import styles from "./TaskApp.module.css";
import { PlatformLaunch } from "../components/TaskPane/PlatformLaunch";

const INITIAl_STATE: IBoard[] = [
  {
    name: "Tareas del hogar",
    id: 1,
    columns: ["todo", "doing", "done"],
    tasks: [
      {
        title: "Lavar la ropa",
        description: "No tengo ropa para ir de viaje",
        id: `Tareasdelhogar1`,
        status: "todo",
      },
      {
        title: "Ordenar cuarto",
        description: "paz mental",
        id: `Tareasdelhogar2`,
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
}

export function TaskApp() {
  const [boards, setBoards] = useState<TaskAppState["boards"]>(INITIAl_STATE);
  const [board, setBoard] = useState<TaskAppState["board"]>(INITIAl_STATE[0]);
  const [countBoards, setCountBoards] = useState<TaskAppState["countBoard"]>(3);
  const [selectBoard, setSelectBoard] = useState<TaskAppState["select"]>(1);

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
    const updateBoardTask = boards.map((board) => {
      if (board.id === selectBoard) {
        return {
          ...board,
          tasks: [...listTask, newTask],
        };
      }
      return board;
    });
    setBoards(updateBoardTask);
  };

  useEffect(() => {
    handleSelectBoard(selectBoard);
  });

  return (
    <div className={styles.ContainerTaskApp}>
      <SideBar
        handleListBoard={handleListBoard}
        handleCountBoard={handleCountBoard}
        handleSelectBoard={handleSelectBoard}
        countBoards={countBoards}
        boards={boards}
        selectBoard={selectBoard}
      />
      <PlatformLaunch board={board} handleNewTask={handleNewTask} />
    </div>
  );
}
