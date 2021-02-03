import '../redux-tools.d';
import type { Reducer as ReduxReducer, Store } from 'redux';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

export declare type OmitUndefined<T> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends undefined ? never : Key }[keyof T]
>;

export declare type Actions<
  K extends keyof Micra.Actions = keyof Micra.Actions
> = K extends any
  ? OmitUndefined<{ type: K; payload: Micra.Actions[K] }>
  : never;

export declare type GlobalState = Micra.State;

export interface GlobalStore extends Store<Micra.State, Actions> {
  dispatch: ThunkDispatch<GlobalState, any, Actions>;
  add(key: keyof GlobalState, reducer: ReduxReducer): GlobalStore;
}

export declare type Thunk<E> = ThunkAction<
  Promise<void>,
  GlobalState,
  E,
  Actions
>;

export type GlobalDispatcher = {
  (action: Actions): void;
  <E = any>(thunk: Thunk<E>): void;
};

export declare type Reducer<S, A> = (state: S, action: A) => S;

export declare type ActionHandlers<S, A extends Actions> = A extends any
  ? Partial<Record<A['type'], Reducer<S, A>>>
  : never;

export declare type ActionCreator<A extends keyof Micra.Actions> = {
  (
    ...payload: Micra.Actions[A] extends undefined
      ? []
      : [payload: Micra.Actions[A]]
  ): { type: A; payload: Micra.Actions[A] };
  type: A;
};

export declare type ActionTypes = keyof Micra.Actions;
