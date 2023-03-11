import { Section, Container, Title, ProductCard, WatchMore } from 'components';
import { List } from './Popular.styled';

export function Popular() {
  // in tablet version only 3 cards
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
        <WatchMore href="/">Подивитися всі товари</WatchMore>
      </Container>
    </Section>
  );
}
