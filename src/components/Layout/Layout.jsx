import React, { Suspense } from 'react';
import { Header } from './Header';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <GlobalStyledContainer>
          <Navigation />
        </GlobalStyledContainer>
      </Header>

      <GlobalStyledMain>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Outlet />
        </Suspense>
      </GlobalStyledMain>
    </>
  );
};

export default Layout;
