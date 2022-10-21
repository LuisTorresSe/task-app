import { Tasks } from "../../types";

import styled from "styled-components";

interface Props {
  task: Tasks;
}

export function Task({ task }: Props) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${task.id}`);
    console.log(task.id);
  };

  return (
    <ContainerTask draggable onDragStart={handleDragStart}>
      <p className="title"> {task.title}</p>
      <p className="description">{task.description}</p>
    </ContainerTask>
  );
}

const ContainerTask = styled.div`
  width: 95%;
  border-radius: 1em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(214, 214, 214, 0.438);

  .title {
    font-weight: bold;
    padding-left: 1em;
    padding-top: 1em;
    margin: 0;
  }
  .description {
    font-size: 0.8rem;
    padding-left: 1em;
  }
`;
