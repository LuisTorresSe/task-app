import { Tasks } from "../../types";
import { Task } from "../TaskPane/Task";
interface Props {
  tasks: Tasks[];
  status: string;
}

export function ContainerTasks({ tasks, status }: Props) {
  return (
    <div>
      {tasks.map((task) => {
        return task.status === status ? (
          <Task task={task} key={task.id} />
        ) : null;
      })}
    </div>
  );
}
