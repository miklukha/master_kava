import { Title } from 'components';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

export function Reviews() {
  return (
    <>
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
    </>
  );
}
