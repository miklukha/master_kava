import {
  Wrapper,
  Img,
  Title,
  Details,
  DescWrapper,
} from './ProductOrder.styled';
import product from 'assets/images/product.jpg';
import { CloseDeleteBtn, Counter } from 'components';

export function ProductOrder({ placing }) {
  const onDeleteClick = () => {
    console.log('delete the product from cart');
  };

  return (
    <Wrapper placing={placing && true}>
      {!placing && <CloseDeleteBtn remove handleClick={onDeleteClick} />}
      <Img src={product} alt="product" />
      <DescWrapper placing={placing && true}>
        <Title>Кава Brasil, 250г</Title>
        <Details>
          {placing ? <span>1шт</span> : <Counter />}
          <span>655 грн</span>
        </Details>
      </DescWrapper>
    </Wrapper>
  );
}
