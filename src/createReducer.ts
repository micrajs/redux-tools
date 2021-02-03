import { identity } from './helpers';
import { Actions, ActionHandlers, Reducer } from './types';

export const createReducer = <S>(
  initialState: S,
  actionHandlers: ActionHandlers<S, Actions>,
): Reducer<S, Actions> => (state: S = initialState, action: Actions): S =>
  action.type === '*/reset'
    ? initialState
    : /* @ts-expect-error Action types can be dynamically defined */
      (actionHandlers[action.type] ?? identity)(state, action);
