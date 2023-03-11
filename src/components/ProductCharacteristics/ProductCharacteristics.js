import {
  List,
  Item,
  // Circle,
  // CircleItem,
  Estimate,
} from './ProductCharacteristics.styled';

export function ProductCharacteristics() {
  return (
    <List>
      <Item>
        <span>Кислинка:</span>
        <Estimate>4/5</Estimate>
        {/* <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </CircleItem>
        </ul> */}
      </Item>
      <Item>
        <span>Міцність:</span>
        <Estimate>3/5</Estimate>
        {/* <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </ul> */}
      </Item>
      <Item>
        <span>Гірчинка:</span>
        <Estimate>4/5</Estimate>
        {/* <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
          </CircleItem>
        </ul> */}
      </Item>
      <Item>
        <span>Аромат:</span>
        <Estimate>2/5</Estimate>
        {/* <ul>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </ul> */}
      </Item>
    </List>
  );
}
