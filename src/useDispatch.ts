import { useDispatch as useReduxDispatcher } from 'react-redux';
import type { GlobalDispatcher } from './types';

export const useDispatch: () => GlobalDispatcher = useReduxDispatcher;
