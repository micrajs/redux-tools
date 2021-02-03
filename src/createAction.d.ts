import type { ActionCreator } from './types';

export declare const createAction: <A extends keyof Micra.Actions>(
  type: A,
) => ActionCreator<A>;
