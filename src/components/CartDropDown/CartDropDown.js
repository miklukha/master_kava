import {
  CartDropWrapper,
  ProductImg,
  ProductTitle,
  ProductWrapper,
  Title,
} from './CartDropDown.styled';
import product from 'assets/images/product.jpg';

export function CartDropDown() {
  return (
    <CartDropWrapper>
      <Title>Кошик</Title>
      <ProductWrapper>
        <ProductImg src={product} alt="product" />
        <ProductTitle>Кава Brasil, 250г</ProductTitle>
      </ProductWrapper>
    </CartDropWrapper>
  );
}
