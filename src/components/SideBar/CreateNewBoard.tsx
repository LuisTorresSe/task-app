import { FormBoard } from "./FormBoard";
import { IBoard } from "../../types";
interface Props {
  handleStateForm: (state: boolean) => void;
  handleListBoard: (board: IBoard) => void;
  stateForm: Boolean;
  handleCountBoard: (newCount: number) => void;
  countBoards: number;
}

export function CreateNewBoard({
  handleStateForm,
  handleListBoard,
  stateForm,
  handleCountBoard,
  countBoards,
}: Props) {
  return (
    <div>
      <button onClick={() => handleStateForm(true)}>+ Create new Board</button>
      <div>
        {stateForm ? (
          <FormBoard
            handleStateForm={handleStateForm}
            handleListBoard={handleListBoard}
            handleCountBoard={handleCountBoard}
            countBoards={countBoards}
          />
        ) : null}
      </div>
    </div>
  );
}
