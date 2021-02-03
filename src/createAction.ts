import type { ActionCreator } from './types';

export const createAction = <A extends keyof Micra.Actions>(
  type: A,
): ActionCreator<A> => {
  const actionCreator = function (...[payload]) {
    return {
      type,
      payload,
    };
  } as ActionCreator<A>;

  actionCreator.type = type;

  return actionCreator;
};
