import {
  Wrapper,
  Img,
  Title,
  Details,
  DescWrapper,
} from './ProductOrder.styled';
import product from 'assets/images/product.jpg';
import { CloseDeleteBtn, Counter } from 'components';
import { useState } from 'react';

export function ProductOrder({ placing }) {
  const [quantity, setQuantity] = useState(1);

  const onDeleteClick = () => {
    console.log('delete the product from cart');
  };

  const onQuantityChange = newQuantity => {
    setQuantity(parseInt(newQuantity));
  };

  return (
    <Wrapper placing={placing && true}>
      {!placing && <CloseDeleteBtn remove handleClick={onDeleteClick} />}
      <Img src={product} alt="product" />
      <DescWrapper placing={placing && true}>
        <Title>Кава Brasil, 250г</Title>
        <Details>
          {placing ? (
            <span>1шт</span>
          ) : (
            <Counter handleQuantityChange={onQuantityChange} />
          )}
          <span>655 грн</span>
        </Details>
      </DescWrapper>
    </Wrapper>
  );
}
