import React, { Suspense } from 'react';
import { Header } from './blocks/Header';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { SideBar } from './blocks/SideBar';
// import { Footer } from './blocks/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />

      <WrapperContent>
        <GlobalStyledContainer>
          <SideBar />
          <GlobalStyledMain>
            <Suspense fallback={<div>Loading...</div>}>
              {children}
              <Outlet />
            </Suspense>
          </GlobalStyledMain>
        </GlobalStyledContainer>
      </WrapperContent>

      {/* <Footer /> */}
    </StyledLayout>
  );
};

const StyledLayout = styled.div``;
const WrapperContent = styled.div`
  padding-top: 40px;
`;

export default Layout;
