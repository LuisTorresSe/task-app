import { IBoard } from "../types";
import { useState } from "react";
import { SideBar } from "./SideBar/SideBar";

interface TaskAppState {
  Board: IBoard[];
  countBoard: number;
}

const INITIAl_STATE: IBoard[] = [
  {
    name: "Tareas del hogar",
    id: 1,
    columns: ["todo", "doing", "done"],
  },
  {
    name: "Tareas del universidad",
    id: 2,
    columns: ["todo", "doing", "done"],
  },
  {
    name: "Tareas del trabajo",
    id: 3,
    columns: ["todo", "doing", "done"],
  },
];

export function TaskApp() {
  const [boards, setBoards] = useState<TaskAppState["Board"]>(INITIAl_STATE);
  const [countBoards, setCountBoards] = useState<TaskAppState["countBoard"]>(
    INITIAl_STATE.length + 1
  );

  const handleListBoard = (board: IBoard) => {
    setBoards([...boards, board]);
  };
  const handleCountBoard = (newCount: number) => {
    setCountBoards(newCount);
  };
  return (
    <div>
      <SideBar
        boards={boards}
        handleListBoard={handleListBoard}
        handleCountBoard={handleCountBoard}
        countBoards={countBoards}
      />
    </div>
  );
}
