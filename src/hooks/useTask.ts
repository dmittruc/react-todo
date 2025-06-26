import {useDispatch, useSelector} from 'react-redux';
import {ITask} from '../interfaces';
import {TAppDispatch, TRootState} from '../store';
import {tasksAsyncAction} from '../store/actions/tasksActions';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.tasks.tasks,
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.loading,
  );
  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.tasks.error,
  );

  const fetchTasks = () => {
    dispatch(tasksAsyncAction());
  };

  return {
    tasks,
    loading,
    error,
    fetchTasks,
  };
};

export default useTasks;
