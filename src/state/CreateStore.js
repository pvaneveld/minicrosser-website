import rootReducer from './index';
import { createStore } from 'redux';

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
  );
};
