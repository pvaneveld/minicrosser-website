// Reducers

export type Page = { id: string; title: string; inView: boolean }[];
export type HeaderMargin = number;
export type FooterMargin = number;

export interface AppState {
  pages: Page;
  headerMargin: HeaderMargin;
  footerMargin: FooterMargin;
}

// Actions

export const UPDATE_PAGES = 'UPDATE_PAGES';
export const UPDATE_HEADER_MARGIN = 'UPDATE_HEADER_MARGIN';
export const UPDATE_FOOTER_MARGIN = 'UPDATE_FOOTER_MARGIN';

export interface UpdatePagesAction {
  type: typeof UPDATE_PAGES;
  payload: Page;
}

export interface UpdateMarginHeaderAction {
  type: typeof UPDATE_HEADER_MARGIN;
  payload: HeaderMargin;
}

export interface UpdateMarginFooterAction {
  type: typeof UPDATE_FOOTER_MARGIN;
  payload: FooterMargin;
}

export type AppActionTypes = UpdatePagesAction | UpdateMarginHeaderAction | UpdateMarginFooterAction;
