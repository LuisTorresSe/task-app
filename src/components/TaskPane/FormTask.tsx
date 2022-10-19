import { Tasks } from "../../types";
import { useState } from "react";
interface Props {
  handleStateForm: (state: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
  idBoard: number | undefined;
}

interface FormTaskState {
  inputValues: Tasks;
}

export function FormTask({ handleStateForm, handleNewTask, idBoard }: Props) {
  const [inputValues, setInputValues] = useState<FormTaskState["inputValues"]>({
    title: "",
    description: "",
    id: "",
    status: "todo",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleIdForm = () => {
    setInputValues({
      ...inputValues,
      id: `${inputValues.title}${idBoard}`,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIdForm();
    handleStateForm(false);
    handleNewTask(inputValues);
  };

  console.log(inputValues);
  return (
    <form action="" onSubmit={handleSubmit}>
      <p>Add new Task</p>
      <div>
        <label htmlFor="title-task">Title</label>
        <input
          type="text"
          name="title"
          id="title-task"
          onChange={handleChangeInput}
          value={inputValues.title}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChangeTextarea}
        ></textarea>
      </div>{" "}
      <div>
        <label htmlFor="status"> Status</label>
        <select name="status" id="status" onChange={handleChangeSelect}>
          <option value="todo" defaultChecked>
            todo
          </option>
          <option value="doing">doing</option>
          <option value="done">done</option>
        </select>
      </div>
      <button type="submit">Create Task</button>
      <button onClick={(e) => handleStateForm(false)}>Cancel</button>
    </form>
  );
}
