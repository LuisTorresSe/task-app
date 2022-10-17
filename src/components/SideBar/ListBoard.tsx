import { IBoard } from "../../types";
import { Board } from "./Board";
import { CountBoards } from "./CountBoards";
import styles from "./ListBoard.module.css";
interface Props {
  boards: IBoard[];
  countBoards: number;
  selectBoard: number;
  handleSelectBoard: (select: number) => void;
}

export function ListBoard({
  boards,
  countBoards,
  selectBoard,
  handleSelectBoard,
}: Props) {
  return (
    <div className={styles.ContainerListBoard}>
      <CountBoards countBoards={countBoards} />
      <div className={styles.elementsListBoard}>
        {boards.map((board) => {
          return (
            <Board
              boardName={board.name}
              key={board.id}
              id={Number(board.id)}
              handleSelectBoard={handleSelectBoard}
              selectBoard={selectBoard}
            />
          );
        })}
      </div>
    </div>
  );
}
