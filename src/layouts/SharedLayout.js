import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'layouts';
import { Section, Container, Loader } from 'components';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

export function SharedLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      {isHome ? (
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      ) : (
        <Container>
          <Section>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      )}
      <Footer />
    </>
  );
}
