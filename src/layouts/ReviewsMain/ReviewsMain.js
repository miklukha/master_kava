import { WatchMore, Section, Container, Title, Review } from 'components';
import { List } from './ReviewsMain.styled';

export function ReviewsMain() {
  // there are 6 items in mobile and desktop version amd TABLET - 4
  return (
    <Section>
      <Container>
        <Title>Відгуки</Title>
        <List>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </List>
        <WatchMore>Подивитися всі відгуки</WatchMore>
      </Container>
    </Section>
  );
}
