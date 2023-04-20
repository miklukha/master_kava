import {
  Wrapper,
  Img,
  Title,
  Details,
  DescWrapper,
  DetailsItem,
  DetailsPrice,
  DetailsWrapper,
} from './ProductOrder.styled';
import { CloseDeleteBtn } from 'components';

export function ProductOrder({ placing, product = {}, onDelete }) {
  const { image, name, quantity, price, weight, grind } = product;

  return (
    <Wrapper placing={placing && true}>
      {!placing && <CloseDeleteBtn remove handleClick={onDelete} />}
      <Img src={image} alt={name} />
      <DescWrapper placing={placing && true}>
        <Title>{name}</Title>
        <DetailsWrapper>
          <Details>
            <DetailsItem>{quantity}шт</DetailsItem>
            <DetailsItem>{weight}г</DetailsItem>
            <DetailsItem>{grind.name}</DetailsItem>
          </Details>
          <DetailsPrice>{price}грн</DetailsPrice>
        </DetailsWrapper>
      </DescWrapper>
    </Wrapper>
  );
}
