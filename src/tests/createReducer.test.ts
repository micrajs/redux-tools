import './test.d';
import { createReducer } from '../createReducer';
import { Actions } from '../types';

describe('createReducer tests', () => {
  it('should reset to the initial state', () => {
    const mockReducer = jest.fn();
    const reducer = createReducer(42, {
      'test/action': mockReducer,
    });

    const result = reducer(24, { type: '*/reset' });

    expect(result).toBe(42);
  });

  it('should run a custom reducer', () => {
    const mockReducer = jest.fn();
    const action: Actions = { type: 'test/action', payload: 42 };
    const reducer = createReducer(42, {
      'test/action': mockReducer,
    });

    reducer(24, action);

    expect(mockReducer).toHaveBeenCalledWith(24, action);
  });
});
