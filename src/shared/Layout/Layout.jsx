import { Suspense } from 'react';
import { Header } from './Header';
import { GlobalStyledMain } from 'styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container } from 'components/common/component/Container/Container';
import { Loader } from 'components/common/component/Loader/Loader';

export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>

      <GlobalStyledMain>
        <Suspense fallback={<Loader component="Suspense" />}>
          {children}
          <Outlet />
        </Suspense>
      </GlobalStyledMain>
    </>
  );
};
