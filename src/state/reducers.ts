import { AppState, AppActionTypes, UPDATE_PAGES } from './types';

const initialState: AppState = {
  pages: [],
};

export const AppReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case UPDATE_PAGES:
      return {
        pages: action.payload,
      };
    default:
      return state;
  }
};
