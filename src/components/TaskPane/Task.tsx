import { Tasks } from "../../types";
interface Props {
  task: Tasks;
}

export function Task({ task }: Props) {
  return <div>{task.title}</div>;
}
