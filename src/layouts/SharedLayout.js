import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'layouts';
import { Section, Container, Loader } from 'components';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export function SharedLayout() {
  const location = useLocation();
  const isHome =
    location.pathname === '/' || location.pathname === '/master_kava';

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
      <Toaster />
    </>
  );
}
