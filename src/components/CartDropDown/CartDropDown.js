import { ModalTitle, ProductOrder } from 'components';
import {
  CartDropWrapper,
  Notification,
  OrderData,
  OrderDesc,
  OrderDynamicData,
  OrderLink,
  ProductList,
} from './CartDropDown.styled';
import { useState, useEffect } from 'react';

export function CartDropDown() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const isCartData = cartData.length !== 0 ? true : false;

  const onDelete = id => {
    const productIndex = cartData.findIndex(product => product.id === id);
    cartData.splice(productIndex, 1);

    localStorage.setItem('cartData', JSON.stringify(cartData));
    window.dispatchEvent(new Event('storage'));
    setCartData([...cartData]);
  };

  useEffect(() => {
    setNumber(cartData.length);

    const totalPrice = cartData.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartData]);

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
          <OrderDesc>
            <OrderData>
              Кількість товарів: <OrderDynamicData>{number}</OrderDynamicData>
            </OrderData>
            <OrderData>
              Остаточна ціна:{' '}
              <OrderDynamicData>{totalPrice} грн</OrderDynamicData>
            </OrderData>
          </OrderDesc>
          <OrderLink to={'/placing-order'}>Замовити</OrderLink>
        </>
      ) : (
        <Notification>Немає товарів у кошику</Notification>
      )}
    </CartDropWrapper>
  );
}
