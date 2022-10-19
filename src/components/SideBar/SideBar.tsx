import { IBoard } from "../../types";
import { ListBoard } from "./ListBoard";
import { CreateNewBoard } from "./CreateNewBoard";
import { HeaderSideBar } from "./HeaderSideBar";
import { useState } from "react";
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
  stateForm: boolean;
}
export function SideBar({
  boards,
  countBoards,
  selectBoard,
  handleListBoard,
  handleCountBoard,
  handleSelectBoard,
}: Props) {
  const [stateForm, setStateForm] = useState<SideBarState["stateForm"]>(false);
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
