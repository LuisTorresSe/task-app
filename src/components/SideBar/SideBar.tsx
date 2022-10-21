import { IBoard } from "../../types";
import { ListBoard } from "./ListBoard";
import { CreateNewBoard } from "./CreateNewBoard";
import { HeaderSideBar } from "./HeaderSideBar";
import { useState } from "react";
import styled from "styled-components";
interface Props {
  boards: IBoard[];
  countBoards: number;
  selectBoard: number;
  visible: boolean;
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  handleSelectBoard: (select: number) => void;
}

interface SideBarState {
  stateForm: boolean;
}
export function SideBar({
  boards,
  countBoards,
  selectBoard,
  visible,
  handleListBoard,
  handleCountBoard,
  handleSelectBoard,
}: Props) {
  const [stateForm, setStateForm] = useState<SideBarState["stateForm"]>(false);
  const handleStateForm = (state: boolean) => {
    setStateForm(state);
  };
  return (
    <ContainerSideBar className={visible === true ? "visible" : ""}>
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
    </ContainerSideBar>
  );
}

const ContainerSideBar = styled.div`
  width: 30%;
  height: 100%;
  background-color: white;

  @media (max-width: 912px) {
    & {
      display: none;
      position: absolute;
      top: 15%;
      height: 85%;
      width: 80%;
    }

    &.visible {
      display: block;

      top: 15%;
      height: 85%;
      width: 80%;
      transition: 0s initial;
    }
  }
`;
