import {ITask} from '../../interfaces';

interface IProps {
  task: ITask;
}

const TaskListItem = ({task}: IProps) => {
  return (
    <div>
      <p>Task title: {task.title}</p>
      <p>Task description: {task.description}</p>
    </div>
  );
};

export default TaskListItem;
