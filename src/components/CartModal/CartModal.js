import { BtnsWrapper, ContinueBtn, Modal, OrderBtn } from './CartModal.styled';
import { ModalTitle, CloseDeleteBtn, ProductOrder, CartDesc } from 'components';

export function CartModal() {
  return (
    <Modal>
      <CloseDeleteBtn
        handleClick={() => {
          console.log('close modal');
        }}
      />
      <ModalTitle>Кошик</ModalTitle>
      <ProductOrder />
      <CartDesc />
      <BtnsWrapper>
        <OrderBtn type="button" aria-label="замовити">
          Замовити
        </OrderBtn>
        <ContinueBtn type="button" aria-label="продовжити покупки">
          Продовжити покупки
        </ContinueBtn>
      </BtnsWrapper>
    </Modal>
  );
}
