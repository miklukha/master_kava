import { Container, Section, Title } from 'components';
import { Footer, Header } from 'layouts';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

export function Reviews() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Title>ВІДГУКИ</Title>
          <ReviewsList>
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
          </ReviewsList>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
