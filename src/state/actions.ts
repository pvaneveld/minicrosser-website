import {
  Page,
  HeaderMargin,
  FooterMargin,
  UPDATE_PAGES,
  UPDATE_FOOTER_MARGIN,
  UPDATE_HEADER_MARGIN,
  AppActionTypes,
} from './types';

export const updatePages = (newPage: Page): AppActionTypes => ({
  type: UPDATE_PAGES,
  payload: newPage,
});

export const updateHeaderMargin = (newMargin: HeaderMargin) => ({
  type: UPDATE_HEADER_MARGIN,
  payload: newMargin,
});

export const updateFooterMargin = (newMargin: FooterMargin) => ({
  type: UPDATE_FOOTER_MARGIN,
  payload: newMargin,
});
