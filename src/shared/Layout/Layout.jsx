import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Container } from '../../shared/components/Container/Container';
import { Loader } from '../../shared/components/Loader/Loader';

export const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>

      <main>
        <Suspense fallback={<Loader component="Suspense" />}>
          {children}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
