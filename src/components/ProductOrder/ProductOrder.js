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
  const { id, name, quantity, price, weight, grind = {} } = product;
  const imgPath = 'http://127.0.0.1:1880/images/';

  return (
    <Wrapper placing={placing && true}>
      {!placing && <CloseDeleteBtn remove handleClick={onDelete} />}
      <Img src={`${imgPath}${id}`} alt={name} />
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
