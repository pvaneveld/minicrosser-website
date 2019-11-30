import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './index';

/* eslint-disable */

const createStore = () => {
  if (window) {
    return reduxCreateStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }   
  return reduxCreateStore(rootReducer);
}

export default ({ element }) => <Provider store={createStore()}>{element}</Provider>;
