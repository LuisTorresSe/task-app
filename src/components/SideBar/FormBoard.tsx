import { IBoard } from "../../types";
import { useState } from "react";
import styles from "./FormBoard.module.css";
interface Props {
  handleStateForm: (status: boolean) => void;
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  handleSelectBoard: (select: number) => void;
  countBoards: number;
}

export function FormBoard({
  handleStateForm,
  handleListBoard,
  handleCountBoard,
  handleSelectBoard,
  countBoards,
}: Props) {
  const [inputValues, setInputValues] = useState<IBoard>({
    name: "",
    id: countBoards + 1,
    columns: ["todo", "doing", "done"],
    tasks: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStateForm(false);
    if (inputValues.name !== "") {
      handleCountBoard(countBoards + 1);
      handleListBoard(inputValues);
      handleSelectBoard(countBoards + 1);
    }
  };

  const handleButtonCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleStateForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.containerFormBoard}>
      <h1 className={styles.titleFormBoard}>Add new Board</h1>
      <div className={`${styles.containerElementBoard} ${styles.name}`}>
        <label htmlFor="name">Board Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="e.g Web Design"
          className={styles.formText}
        />
      </div>

      <button
        type="submit"
        className={`${styles.btnFormBoard} ${styles.btnCreate}`}
      >
        CreateBoard
      </button>

      <button
        onClick={handleButtonCancel}
        className={`${styles.btnFormBoard} ${styles.btnCancel}`}
      >
        Cancelar
      </button>
    </form>
  );
}
