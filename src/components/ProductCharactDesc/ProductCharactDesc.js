import {
  List,
  Item,
  Characteristic,
  Circle,
  CircleItem,
  CircleList,
  CircleGray,
} from './ProductCharactDesc.styled';

export function ProductCharactDesc({ characteristics }) {
  const { sourness, bitterness, sturdiness, saturation } = characteristics;
  const array = [1, 2, 3, 4, 5];

  return (
    <List>
      <Item>
        <Characteristic>Кислинка:</Characteristic>
        <CircleList>
          {array.map((num, i) => (
            <CircleItem key={i}>
              {num > sourness ? <CircleGray /> : <Circle />}
            </CircleItem>
          ))}
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Гірчинка:</Characteristic>
        <CircleList>
          {array.map((num, i) => (
            <CircleItem key={i}>
              {num > bitterness ? <CircleGray /> : <Circle />}
            </CircleItem>
          ))}
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Міцність:</Characteristic>
        <CircleList>
          {array.map((num, i) => (
            <CircleItem key={i}>
              {num > sturdiness ? <CircleGray /> : <Circle />}
            </CircleItem>
          ))}
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Насиченість:</Characteristic>
        <CircleList>
          {array.map((num, i) => (
            <CircleItem key={i}>
              {num > saturation ? <CircleGray /> : <Circle />}
            </CircleItem>
          ))}
        </CircleList>
      </Item>
    </List>
  );
}
