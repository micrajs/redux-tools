import './test.d';
import { createAction } from '../createAction';

describe('createAction tests', () => {
  it('should create an action', () => {
    const resetAction = createAction('*/reset');

    const action = resetAction();

    expect(action).toMatchObject({
      type: '*/reset',
    });
  });

  it('should create an action with a payload', () => {
    const testAction = createAction('test/action');

    const action = testAction(123);

    expect(action).toMatchObject({
      type: 'test/action',
      payload: 123,
    });
  });

  it('should create an action', () => {
    const resetAction = createAction('*/reset');

    const action = resetAction();

    expect(action).toMatchObject({
      type: '*/reset',
    });
  });

  it('should return the action type', () => {
    const resetAction = createAction('*/reset');

    const action = resetAction();

    expect(action.type).toBe('*/reset');
  });
});
