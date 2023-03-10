import {
  List,
  Item,
  Characteristic,
  Circle,
  CircleList,
  CircleItem,
} from './ProductCharacteristics.styled';

export function ProductCharacteristics() {
  return (
    <List>
      <Item>
        <Characteristic>Кислинка:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Гірчинка:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Міцність:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Насиченість:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
    </List>
  );
}
