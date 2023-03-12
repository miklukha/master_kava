import {
  List,
  Item,
  Circle,
  CircleItem,
  CircleList,
  Characteristic,
  // Estimate,
} from './ProductCharacteristics.styled';

export function ProductCharacteristics() {
  return (
    <List>
      <Item>
        <Characteristic>Кислинка:</Characteristic>
        {/* <Estimate>4/5</Estimate> */}
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
        <Characteristic>Міцність:</Characteristic>
        {/* <Estimate>3/5</Estimate> */}
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
        <Characteristic>Гірчинка:</Characteristic>
        {/* <Estimate>4/5</Estimate> */}
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
        {/* <Estimate>2/5</Estimate> */}
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
