import React from 'react';
import { GlobalStyle } from '../styles/global';
import { ReactNode } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.SFC<LayoutProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Normalize />
        <GlobalStyle />
        {props.children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
