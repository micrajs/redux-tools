import type { ActionCreator } from './types';

export declare const createAction: <A extends keyof Application.Actions>(
  type: A,
) => ActionCreator<A>;
