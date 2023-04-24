import { useEffect, useState } from 'react';
import {
  Item,
  Label,
  List,
  Tip,
  TogetherText,
  Value,
  Wrapper,
} from './OrderAside.styled';

export function OrderAside({ cartData = [] }) {
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setNumber(cartData.length);

    const totalPrice = cartData.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartData]);

  return (
    <Wrapper>
      <TogetherText>Разом</TogetherText>
      <List>
        <Item>
          <Label>
            Сума за {number > 1 ? `${number} товари` : `${number} товар`}:
          </Label>
          <Value>{totalPrice} грн</Value>
        </Item>
        <Item>
          <Label>Вартість доставки:</Label>
          <Value>за тарифами служби доставки*</Value>
        </Item>
        <Item>
          <Label>До сплати:</Label>
          <Value>{totalPrice} грн</Value>
        </Item>
      </List>
      <Tip>
        *вартість доставки окремо оплачується при отриманні посилки у відділенні
      </Tip>
    </Wrapper>
  );
}
