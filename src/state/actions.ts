import { Page, UPDATE_PAGES, AppActionTypes } from './types';

export const updatePages = (newPage: Page): AppActionTypes => ({
  type: UPDATE_PAGES,
  payload: newPage,
});
