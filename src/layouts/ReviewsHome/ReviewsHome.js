import { WatchMore, Section, Container, TitleHome, Review } from 'components';
import { List } from './ReviewsHome.styled';

export function ReviewsHome() {
  // there are 6 items in mobile and desktop version amd TABLET - 4
  return (
    <Section>
      <Container>
        <TitleHome>Відгуки</TitleHome>
        <List>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </List>
        <WatchMore href="/">Подивитися всі відгуки</WatchMore>
      </Container>
    </Section>
  );
}
