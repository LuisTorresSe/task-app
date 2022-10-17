import { IBoard } from "../../types";
import { ListBoard } from "./ListBoard";
import { useState } from "react";
import { CreateNewBoard } from "./CreateNewBoard";
import { HeaderSideBar } from "./HeaderSideBar";
import styles from "./SideBar.module.css";
interface Props {
  boards: IBoard[];
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  handleSelectBoard: (select: number) => void;
  countBoards: number;
  selectBoard: number;
}

interface SideBarState {
  statusFormBoard: boolean;
}

export function SideBar({
  boards,
  countBoards,
  selectBoard,
  handleListBoard,
  handleCountBoard,
  handleSelectBoard,
}: Props) {
  const [stateForm, setStateForm] =
    useState<SideBarState["statusFormBoard"]>(false);

  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };

  return (
    <div className={styles.SideBar}>
      <HeaderSideBar />
      <ListBoard
        boards={boards}
        handleSelectBoard={handleSelectBoard}
        countBoards={countBoards}
        selectBoard={selectBoard}
      />
      <CreateNewBoard
        handleStateForm={handleStateForm}
        stateForm={stateForm}
        handleListBoard={handleListBoard}
        handleCountBoard={handleCountBoard}
        countBoards={countBoards}
        handleSelectBoard={handleSelectBoard}
      />
    </div>
  );
}
