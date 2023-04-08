import {
  Section,
  Container,
  TitleHome,
  ProductCard,
  WatchMore,
} from 'components';
import { List } from './Popular.styled';

export function Popular() {
  // in tablet version only 3 cards
  return (
    <Section>
      <Container>
        <TitleHome>Популярні товари</TitleHome>
        <List>
          <ProductCard ingredients="Арабіка 100%" />
          <ProductCard ingredients="Арабіка 80%/Робуста 20% " />
          <ProductCard ingredients="Арабіка 100%" />
          <ProductCard ingredients="Арабіка 80%/Робуста 20% " />
        </List>
        <WatchMore to="/shop">Подивитися всі товари</WatchMore>
      </Container>
    </Section>
  );
}
