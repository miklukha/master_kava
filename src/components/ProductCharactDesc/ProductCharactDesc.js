import {
  List,
  Item,
  Characteristic,
  Circle,
  CircleItem,
  CircleList,
} from './ProductCharactDesc.styled';

export function ProductCharactDesc() {
  return (
    <List>
      <Item>
        <Characteristic>Кислинка:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Гірчинка:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Міцність:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
      <Item>
        <Characteristic>Насиченість:</Characteristic>
        <CircleList>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
          <CircleItem>
            <Circle gray />
          </CircleItem>
        </CircleList>
      </Item>
    </List>
  );
}
