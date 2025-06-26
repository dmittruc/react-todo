import {Provider} from 'react-redux';
import './App.css';
import TasksPage from './pages/TasksPage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <TasksPage />
    </Provider>
  );
};

export default App;
