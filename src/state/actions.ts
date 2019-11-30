import { Page, UPDATE_PAGES, SCROLL_PAGE_DOWN, AppActionTypes } from './types';

export const updatePages = (newPage: Page): AppActionTypes => ({
  type: UPDATE_PAGES,
  payload: newPage,
});

export const scrollPageDown = (): AppActionTypes => ({
  type: SCROLL_PAGE_DOWN,
});
