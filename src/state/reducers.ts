import {
  AppState,
  AppActionTypes,
  UPDATE_PAGES,
  UPDATE_HEADER_MARGIN,
  UPDATE_FOOTER_MARGIN,
  configuratorState,
  ConfiguratorActionTypes,
  CHANGE_CONFIGURATOR_PAGE,
  UPDATE_CONFIGURATOR_SELECTION,
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
    default:
      return state;
  }
};

const initialConfiguratorState: configuratorState = {
  page: 1,
  selection: [],
};

export const configuratorReducer = (
  state = initialConfiguratorState,
  action: ConfiguratorActionTypes,
): configuratorState => {
  switch (action.type) {
    case CHANGE_CONFIGURATOR_PAGE:
      return {
        ...state,
        ...{ page: action.payload },
      };
    case UPDATE_CONFIGURATOR_SELECTION:
      return {
        ...state,
        ...{ selection: action.payload },
      };
    default:
      return state;
  }
};
