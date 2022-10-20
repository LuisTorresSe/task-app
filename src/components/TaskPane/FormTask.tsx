import { IBoard, Tasks } from "../../types";
import { useState } from "react";
import styles from "./FormTask.module.css";
interface Props {
  handleStateForm: (state: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
  board: IBoard;
}

interface FormTaskState {
  inputValues: Tasks;
}

export function FormTask({ handleStateForm, handleNewTask, board }: Props) {
  const [inputValues, setInputValues] = useState<FormTaskState["inputValues"]>({
    title: "",
    description: "",
    id: "",
    status: "todo",
  });

  const { id, tasks } = board;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      id: `${id}task${tasks.length + 1}`,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValues.title !== "") {
      handleStateForm(false);
      handleNewTask(inputValues);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className={styles.containerFormTask}
    >
      <h1 className={styles.titleFormBoard}>Add new Task</h1>
      <div className={`${styles.propsForm} ${styles.title_task}`}>
        <label htmlFor="title-task">Title</label>
        <input
          type="text"
          name="title"
          id="title-task"
          onChange={handleChangeInput}
          value={inputValues.title}
          className={styles.inputForm}
        />
      </div>
      <div className={`${styles.propsForm} ${styles.description_task}`}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChangeTextarea}
          className={styles.textTareaForm}
        ></textarea>
      </div>
      <div className={`${styles.propsForm} ${styles.status_task}`}>
        <label htmlFor="status"> Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChangeSelect}
          className={styles.inputForm}
        >
          <option value="todo" defaultChecked>
            todo
          </option>
          <option value="doing">doing</option>
          <option value="done">done</option>
        </select>
      </div>
      <button
        type="submit"
        className={`${styles.btnFormTask} ${styles.btnCreate}`}
      >
        Create Task
      </button>
      <button
        onClick={(e) => handleStateForm(false)}
        className={`${styles.btnFormTask} ${styles.btnCancel}`}
      >
        Cancel
      </button>
    </form>
  );
}
