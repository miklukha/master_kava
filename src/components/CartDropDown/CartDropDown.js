import { Button, CartDesc, ModalTitle, ProductOrder } from 'components';
import {
  CartDropWrapper,
  Notification,
  ProductList,
} from './CartDropDown.styled';
import { useState } from 'react';

export function CartDropDown() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );
  const isCartData = cartData.length !== 0 ? true : false;

  const onDelete = id => {
    const productIndex = cartData.findIndex(product => product.id === id);
    cartData.splice(productIndex, 1);

    localStorage.setItem('cartData', JSON.stringify(cartData));
    setCartData([...cartData]);
  };

  return (
    <CartDropWrapper>
      <ModalTitle>Кошик</ModalTitle>
      {isCartData ? (
        <>
          <ProductList>
            {cartData.map(product => (
              <ProductOrder
                key={product.id}
                product={product}
                onDelete={() => onDelete(product.id)}
              />
            ))}
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
