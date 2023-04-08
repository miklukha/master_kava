import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'layouts';
import { Section, Container } from 'components';
import { useLocation } from 'react-router-dom';

export function SharedLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      {isHome ? (
        <Container>
          <Outlet />
        </Container>
      ) : (
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      )}
      <Footer />
    </>
  );
}
