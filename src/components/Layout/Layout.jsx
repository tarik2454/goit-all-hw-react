import { Suspense } from 'react';
import { Header } from './Header';
import { GlobalStyledMain } from 'styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container } from 'components/common/Container/Container';

export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
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
