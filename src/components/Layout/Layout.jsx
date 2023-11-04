import React, { Suspense } from 'react';
import { Header } from './Header';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <GlobalStyledContainer>
        <GlobalStyledMain>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Outlet />
          </Suspense>
        </GlobalStyledMain>
      </GlobalStyledContainer>
    </>
  );
};

export default Layout;
