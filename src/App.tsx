import {Provider} from 'react-redux';
import './App.css';
import SignInPage from './pages/SignInPage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SignInPage />
    </Provider>
  );
};

export default App;
