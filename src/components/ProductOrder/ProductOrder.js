import { Wrapper, Img, Title, Details } from './ProductOrder.styled';
import product from 'assets/images/product.jpg';
import { CloseDeleteBtn, Counter } from 'components';

export function ProductOrder() {
  const onDeleteClick = () => {
    console.log('delete the product from cart');
  };

  return (
    <Wrapper>
      <CloseDeleteBtn remove handleClick={onDeleteClick} />
      <Img src={product} alt="product" />
      <div>
        <Title>Кава Brasil, 250г</Title>
        <Details>
          <Counter />
          <span>655 грн</span>
        </Details>
      </div>
    </Wrapper>
  );
}
