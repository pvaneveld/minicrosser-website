// Reducers

export type Page = { id: string; title: string; inView: boolean }[];

export interface AppState {
  pages: Page;
}

// Actions

export const UPDATE_PAGES = 'UPDATE_PAGES';
export const SCROLL_PAGE_DOWN = 'SCROLL_PAGE_DOWN';

export interface UpdatePagesAction {
  type: typeof UPDATE_PAGES;
  payload: Page;
}

export interface ScrollPageDownAction {
  type: typeof SCROLL_PAGE_DOWN;
}

export type AppActionTypes = UpdatePagesAction | ScrollPageDownAction;
