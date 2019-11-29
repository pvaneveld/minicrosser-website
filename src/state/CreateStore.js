import rootReducer from './index';
import { createStore } from 'redux';

export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
  );
};
