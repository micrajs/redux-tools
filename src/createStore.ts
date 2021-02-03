import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import type { Reducer, ReducersMapObject, Middleware } from 'redux';
import type { Actions, GlobalState, GlobalStore } from './types';

export const createStore = (
  initialState: GlobalState,
  initialReducers: ReducersMapObject = {},
  middlewares: Middleware[] = [],
): GlobalStore => {
  let reducers: ReducersMapObject = { ...initialReducers };
  let combinedReducers = combineReducers<GlobalState, Actions>(reducers);

  function reduce(state: GlobalState, action: Actions) {
    return Object.keys(reducers).length > 0
      ? combinedReducers(state, action)
      : state;
  }

  const store = createReduxStore(
    (state, action) => reduce((state ?? initialState) as GlobalState, action),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  ) as GlobalStore;

  store.add = function add(key: keyof GlobalState, reducer: Reducer) {
    if (!key || reducers[key]) {
      return store;
    }

    reducers[key] = reducer;

    combinedReducers = combineReducers(reducers);
    store.dispatch({ type: `initialize/${key}` } as any);

    return store;
  };

  return store;
};
