import { OrderData, OrderDesc, OrderDynamicData } from './CartDesc.styled';

export function CartDesc() {
  return (
    <OrderDesc>
      <OrderData>
        У кошику <OrderDynamicData>1</OrderDynamicData> товар
      </OrderData>
      <OrderData>
        Остаточна ціна: <OrderDynamicData>655 грн</OrderDynamicData>
      </OrderData>
    </OrderDesc>
  );
}
