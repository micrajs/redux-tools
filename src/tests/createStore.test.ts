import './test.d';
import thunk from 'redux-thunk';
import { createStore } from '../createStore';
import { createAction } from '../createAction';
import { createReducer } from '../createReducer';

describe('createStore tests', () => {
  it('should create a store with a given reducer', () => {
    const testInitialState = 42;
    const testMockReducer = jest.fn().mockImplementation((s) => s);
    const testAction = createAction('test/action');
    const action = testAction(24);
    const testReducer = createReducer(testInitialState, {
      [testAction.type]: testMockReducer,
    });
    const store = createStore(
      { test: testInitialState },
      {
        test: testReducer,
      },
    );

    store.dispatch(action);

    expect(testMockReducer).toHaveBeenCalledWith(testInitialState, action);
  });

  it('should add a reducer after the store was created', () => {
    const testInitialState = 42;
    const testMockReducer = jest.fn().mockImplementation((s) => s);
    const testAction = createAction('test/action');
    const action = testAction(24);
    const testReducer = createReducer(testInitialState, {
      [testAction.type]: testMockReducer,
    });
    const store = createStore({ test: testInitialState });

    store.add('test', testReducer);

    store.dispatch(action);

    expect(testMockReducer).toHaveBeenCalledWith(testInitialState, action);
  });

  it('should dispatch a thunk', () => {
    const testInitialState = 42;
    const testMockReducer = jest.fn().mockImplementation((s) => s);
    const testAction = createAction('test/action');
    const action = testAction(24);
    const testReducer = createReducer(testInitialState, {
      [testAction.type]: testMockReducer,
    });
    const store = createStore(
      { test: testInitialState },
      { test: testReducer },
      [thunk],
    );

    store.dispatch(async (dispatch) => {
      dispatch(action);
    });

    expect(testMockReducer).toHaveBeenCalledWith(testInitialState, action);
  });
});
