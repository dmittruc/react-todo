import {useEffect} from 'react';
import TaskList from '../../components/TaskList';
import useTasks from '../../hooks/useTask';

const TasksPage = () => {
  const {tasks, loading, error, fetchTasks} = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);
  console.log('task', tasks);
  return (
    <div className="tasks-container">
      <h3>tasks page</h3>
      <TaskList tasks={tasks} loading={loading} error={error} />
    </div>
  );
};

export default TasksPage;
