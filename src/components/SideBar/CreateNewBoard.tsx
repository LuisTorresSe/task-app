import { FormBoard } from "./FormBoard";
import { IBoard } from "../../types";
import styles from "./CreateNewBoard.module.css";
interface Props {
  handleStateForm: (state: boolean) => void;
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  handleSelectBoard: (select: number) => void;
  countBoards: number;
  stateForm: Boolean;
}

export function CreateNewBoard({
  handleStateForm,
  handleListBoard,
  handleCountBoard,
  handleSelectBoard,
  countBoards,
  stateForm,
}: Props) {
  return (
    <div>
      <button
        onClick={() => handleStateForm(true)}
        className={styles.BtnCreateBoard}
      >
        <p className={styles.textBtnCrearBoard}>
          {" "}
          <span className="material-symbols-outlined">team_dashboard</span>+
          Create new Board
        </p>
      </button>
      <div className={stateForm ? "background" : ""}>
        {stateForm ? (
          <FormBoard
            handleStateForm={handleStateForm}
            handleListBoard={handleListBoard}
            handleCountBoard={handleCountBoard}
            handleSelectBoard={handleSelectBoard}
            countBoards={countBoards}
          />
        ) : null}
      </div>
    </div>
  );
}
