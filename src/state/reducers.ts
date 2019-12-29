import {
  AppState,
  AppActionTypes,
  UPDATE_PAGES,
  UPDATE_HEADER_MARGIN,
  UPDATE_FOOTER_MARGIN,
  SET_PRESELECTED_DEALER,
} from './types';

const initialState: AppState = {
  pages: [],
  headerMargin: 0,
  footerMargin: 0,
  preselectedDealer: '',
};

export const AppReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case UPDATE_PAGES:
      return {
        ...state,
        ...{ pages: action.payload },
      };
    case UPDATE_HEADER_MARGIN:
      return {
        ...state,
        ...{ headerMargin: action.payload },
      };
    case UPDATE_FOOTER_MARGIN:
      return {
        ...state,
        ...{ footerMargin: action.payload },
      };
    case SET_PRESELECTED_DEALER:
      return {
        ...state,
        ...{ preselectedDealer: action.payload },
      };
    default:
      return state;
  }
};
