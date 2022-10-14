import { IBoard } from "../../types";
import { Board } from "./Board";
interface Props {
  boards: IBoard[];
}

export function ListBoard({ boards }: Props) {
  return (
    <div>
      {boards.map((board) => {
        return <Board boardName={board.name} key={board.id} />;
      })}
    </div>
  );
}
