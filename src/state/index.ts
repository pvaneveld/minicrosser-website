import { AppReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
