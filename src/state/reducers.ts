import { AppState, AppActionTypes, UPDATE_PAGES, SCROLL_PAGE_DOWN } from './types';

const initialState: AppState = {
  pages: [],
};

export const AppReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case UPDATE_PAGES:
      return {
        pages: action.payload,
      };
    case SCROLL_PAGE_DOWN:
      return {
        pages: state.pages.map(page => ({ ...page, inView: false })),
      };
    default:
      return state;
  }
};
