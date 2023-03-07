import {
  CartDropWrapper,
  ProductImg,
  ProductTitle,
  ProductWrapper,
  Title,
  TitleWrapper,
  // CartDeleteBtn,
  ProductDesc,
  ProductPrice,
  ProductDetails,
  OrderDesc,
  OrderData,
  OrderDynamicData,
} from './CartDropDown.styled';
import product from 'assets/images/product.jpg';
import { Counter, CloseDeleteIcon, Button } from 'components';

export function CartDropDown() {
  const onDeleteClick = () => {
    console.log('delete the product from cart');
  };

  return (
    <CartDropWrapper>
      <TitleWrapper>
        <Title>Кошик</Title>
      </TitleWrapper>
      <ProductWrapper>
        <CloseDeleteIcon delete handleClick={onDeleteClick} />
        {/* <CartDeleteBtn
          type="button"
          aria-label="close cart"
          onClick={onDeleteClick}
        > */}
        {/* <CloseIcon /> */}
        {/* </CartDeleteBtn> */}
        <ProductImg src={product} alt="product" />
        <ProductDesc>
          <ProductTitle>Кава Brasil, 250г</ProductTitle>
          <ProductDetails>
            <Counter />
            <ProductPrice>655 грн</ProductPrice>
          </ProductDetails>
        </ProductDesc>
      </ProductWrapper>
      <OrderDesc>
        <OrderData>
          У кошику <OrderDynamicData>1</OrderDynamicData> товар
        </OrderData>
        <OrderData>
          Остаточна ціна: <OrderDynamicData>655 грн</OrderDynamicData>
        </OrderData>
      </OrderDesc>
      <Button type="button" aria-label="order">
        Замовити
      </Button>
    </CartDropWrapper>
  );
}
