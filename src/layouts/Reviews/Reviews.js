import { WatchMore, Section, Container, Title } from 'components';
import { List, Item } from './Reviews.styled';

export function Reviews() {
  // there are 6 items in mobile and desktop version amd TABLET - 4
  return (
    <Section>
      <Container>
        <Title>Відгуки</Title>
        <List>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </List>
        <WatchMore>Подивитися всі відгуки</WatchMore>
      </Container>
    </Section>
  );
}
