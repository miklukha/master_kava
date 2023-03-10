import { Section, Container, Title, ProductCard, WatchMore } from 'components';
import { List } from './Popular.styled';

export function Popular() {
  return (
    <Section>
      <Container>
        <Title>Популярні товари</Title>
        <List>
          <ProductCard ingredients="Арабіка 100%" />
          <ProductCard ingredients="Арабіка 80%/Робуста 20% " />
          <ProductCard ingredients="Арабіка 100%" />
          <ProductCard ingredients="Арабіка 80%/Робуста 20% " />
        </List>
        <WatchMore>Подивитися всі товари</WatchMore>
      </Container>
    </Section>
  );
}
