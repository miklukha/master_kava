import {
  List,
  Item,
  Circle,
  CircleItem,
} from './ProductCharacteristics.styled';

export function ProductCharacteristics() {
  return (
    <List>
      <Item>
        <span>Кислинка:</span>
        <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </CircleItem>
        </ul>
      </Item>
      <Item>
        <span>Гірчинка:</span>
        <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </ul>
      </Item>
      <Item>
        <span>Міцність:</span>
        <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
          </CircleItem>
        </ul>
      </Item>
      <Item>
        <span>Насиченість:</span>
        <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </ul>
      </Item>
    </List>
  );
}
