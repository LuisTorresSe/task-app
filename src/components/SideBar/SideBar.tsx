import { IBoard } from "../../types";
import { ListBoard } from "./ListBoard";
import { useState } from "react";
import { CreateNewBoard } from "./CreateNewBoard";

interface Props {
  boards: IBoard[];
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  countBoards: number;
}

interface SideBarState {
  statusFormBoard: boolean;
}

export function SideBar({
  boards,
  handleListBoard,
  handleCountBoard,
  countBoards,
}: Props) {
  const [stateForm, setStateForm] =
    useState<SideBarState["statusFormBoard"]>(false);

  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };

  return (
    <div>
      <ListBoard boards={boards} />
      <CreateNewBoard
        handleStateForm={handleStateForm}
        stateForm={stateForm}
        handleListBoard={handleListBoard}
        handleCountBoard={handleCountBoard}
        countBoards={countBoards}
      />
    </div>
  );
}
