import { CreateNewTask } from "./CreateNewTask";
import { IBoard, Tasks } from "../../types";
import styled from "styled-components";

interface Props {
  handleStateForm: (status: boolean) => void;
  handleNewTask: (newTask: Tasks) => void;
  handleVisible: () => void;
  stateForm: boolean;
  board: IBoard;
  visible: boolean;
}

export function HeaderTaskPane({
  stateForm,
  board,
  visible,
  handleStateForm,
  handleNewTask,
  handleVisible,
}: Props) {
  return (
    <ContainerHeaderTaskPane>
      <div className="menuBoard">
        {" "}
        <p className="title">PlatformLaunch</p>{" "}
        <span
          className={`material-symbols-outlined icon_expand ${
            visible === true ? "visible" : ""
          }`}
          onClick={handleVisible}
        >
          expand_more
        </span>
      </div>

      <CreateNewTask
        stateForm={stateForm}
        board={board}
        handleStateForm={handleStateForm}
        handleNewTask={handleNewTask}
      />
    </ContainerHeaderTaskPane>
  );
}

const ContainerHeaderTaskPane = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  outline-offset: 1px solid gray;

  .title {
    margin: 0.5em;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .icon_expand {
    display: none;
  }
  .menuBoard {
    display: flex;
    gap: 2px;
    align-items: center;
  }

  @media (max-width: 912px) {
    .icon_expand {
      display: block;
    }

    .visible {
      animation: 3s inherit;
      transform: rotate(270deg);
    }
  }
`;
