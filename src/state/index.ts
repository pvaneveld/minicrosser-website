import { AppReducer, configuratorReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  app: AppReducer,
  configurator: configuratorReducer,
});

export default rootReducer;

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}
