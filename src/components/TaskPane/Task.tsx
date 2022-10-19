import { Tasks } from "../../types";
interface Props {
  task: Tasks;
}

export function Task({ task }: Props) {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
}
