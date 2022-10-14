import { IBoard } from "../../types";
import { useState } from "react";
interface Props {
  handleStateForm: (status: boolean) => void;
  handleListBoard: (board: IBoard) => void;
  handleCountBoard: (newCount: number) => void;
  countBoards: number;
}

export function FormBoard({
  handleStateForm,
  handleListBoard,
  handleCountBoard,
  countBoards,
}: Props) {
  const [inputValues, setInputValues] = useState<IBoard>({
    name: "",
    id: countBoards,
    columns: ["todo", "doing", "done"],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStateForm(false);
    // inputValues.name !==''? setInputValues({...inputValues, id: countBoards+1}:null
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
    <form onSubmit={handleSubmit}>
      <h1>Add new Board</h1>
      <div>
        <label htmlFor="name">Board Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="submit">Create Board</label>
        <input type="submit" name="submit" id="submit" />
      </div>
      <div>
        <button onClick={handleButtonCancel}>Cancelar</button>
      </div>
    </form>
  );
}
