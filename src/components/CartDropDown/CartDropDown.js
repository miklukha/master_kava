import { Button, CartDesc, ModalTitle, ProductOrder } from 'components';
import { CartDropWrapper, Notification } from './CartDropDown.styled';

export function CartDropDown() {
  const show = true;

  return (
    <CartDropWrapper>
      <ModalTitle title="Кошик" />
      {show ? (
        <>
          <ProductOrder />
          <CartDesc />
          <Button type="button" aria-label="замовити">
            Замовити
          </Button>{' '}
        </>
      ) : (
        <Notification>Немає товарів у кошику</Notification>
      )}
    </CartDropWrapper>
  );
}
