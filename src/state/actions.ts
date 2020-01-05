import {
  Page,
  HeaderMargin,
  FooterMargin,
  UPDATE_PAGES,
  UPDATE_FOOTER_MARGIN,
  UPDATE_HEADER_MARGIN,
  AppActionTypes,
  ConfiguratorActionTypes,
  CHANGE_CONFIGURATOR_PAGE,
  ConfiguratorPage,
  UPDATE_CONFIGURATOR_SELECTION,
  ConfiguratorSelection,
  ValidUntil,
  UPDATE_VALID_PAGES,
} from './types';

export const updatePages = (newPage: Page): AppActionTypes => ({
  type: UPDATE_PAGES,
  payload: newPage,
});

export const updateHeaderMargin = (newMargin: HeaderMargin): AppActionTypes => ({
  type: UPDATE_HEADER_MARGIN,
  payload: newMargin,
});

export const updateFooterMargin = (newMargin: FooterMargin): AppActionTypes => ({
  type: UPDATE_FOOTER_MARGIN,
  payload: newMargin,
});

export const changeConfiguratorPage = (newPage: ConfiguratorPage): ConfiguratorActionTypes => ({
  type: CHANGE_CONFIGURATOR_PAGE,
  payload: newPage,
});

export const updateConfiguratorSelection = (newSelection: ConfiguratorSelection): ConfiguratorActionTypes => ({
  type: UPDATE_CONFIGURATOR_SELECTION,
  payload: newSelection,
});

export const updateValidPages = (newBoundary: ValidUntil): ConfiguratorActionTypes => ({
  type: UPDATE_VALID_PAGES,
  payload: newBoundary,
});
