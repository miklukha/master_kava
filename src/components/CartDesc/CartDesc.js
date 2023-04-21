import { OrderData, OrderDesc, OrderDynamicData } from './CartDesc.styled';

export function CartDesc({ number, totalPrice }) {
  return (
    <OrderDesc>
      <OrderData>
        У кошику <OrderDynamicData>{number}</OrderDynamicData> товар
      </OrderData>
      <OrderData>
        Остаточна ціна: <OrderDynamicData>{totalPrice} грн</OrderDynamicData>
      </OrderData>
    </OrderDesc>
  );
}
