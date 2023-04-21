import { Container, Loader, Section } from 'components';
import { Footer, Header } from 'layouts';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import { Wrapper } from './SharedLayout.styled';

export function SharedLayout() {
  const location = useLocation();
  const isHome =
    location.pathname === '/' || location.pathname === '/master_kava';

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
