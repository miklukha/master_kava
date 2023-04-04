import { Button, CartDesc, ModalTitle, ProductOrder } from 'components';
import {
  CartDropWrapper,
  Notification,
  ProductList,
} from './CartDropDown.styled';

export function CartDropDown() {
  const show = true;

  return (
    <CartDropWrapper>
      <ModalTitle>Кошик</ModalTitle>
      {show ? (
        <>
          <ProductList>
            <ProductOrder />
            <ProductOrder />
            <ProductOrder />
          </ProductList>
          <CartDesc />
          <Button type="button" aria-label="замовити">
            Замовити
          </Button>
        </>
      ) : (
        <Notification>Немає товарів у кошику</Notification>
      )}
    </CartDropWrapper>
  );
}
