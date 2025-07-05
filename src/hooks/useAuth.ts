import {useDispatch, useSelector} from 'react-redux';
import {TAppDispatch, TRootState} from '../store';
import {signInAsyncAction} from '../store/actions/authActions';

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector<TRootState, string | undefined>(
    (state: TRootState) => state.auth.accessToken,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading,
  );

  const signIn = (email: string, password: string, onSuccess: () => void) => {
    dispatch(signInAsyncAction({email, password, onSuccess}));
  };

  return {
    accessToken,
    loading,
    signIn,
  };
};

export default useAuth;
