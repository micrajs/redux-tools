import { Actions, ActionHandlers, Reducer } from './types';

export declare const createReducer: <S>(
  initialState: S,
  actionHandlers: ActionHandlers<S, Actions>,
) => Reducer<S, Actions>;
