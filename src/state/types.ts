// Reducers

export type Page = { id: string; title: string; inView: boolean }[];

export interface AppState {
  pages: Page;
}

// Actions

export const UPDATE_PAGES = 'UPDATE_PAGES';

export interface UpdatePagesAction {
  type: typeof UPDATE_PAGES;
  payload: Page;
}

export type AppActionTypes = UpdatePagesAction;
