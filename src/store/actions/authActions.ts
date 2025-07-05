import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {signInApi} from '../../api/authApi';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
  ISignInAsyncAction,
} from '../../interfaces/actions/authActions';

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction',
);

export const signInAsyncAction = createAsyncThunk<void, ISignInAsyncAction>(
  'auth/signInAsyncAction',
  async ({email, password, onSuccess}: ISignInAsyncAction, {dispatch}) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await signInApi(email, password);
      if (res.token) {
        dispatch(setAccessTokenAction({accessToken: res.token}));
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      console.log('Error/signInAsyncAction', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);
