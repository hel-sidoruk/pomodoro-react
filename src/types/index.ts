import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reducers';

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;
