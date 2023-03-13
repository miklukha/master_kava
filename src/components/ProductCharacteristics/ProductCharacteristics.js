import {
  List,
  Item,
  // Circle,
  // CircleItem,
  // CircleList,
  // Characteristic,
  Icon,
  Img,
  // Img2,
  // Img1,
  // Img3,
  Icon1,
  Icon2,
  Icon3,
  Tip,
  TipText,
  Estimate,
  // Estimate,
} from './ProductCharacteristics.styled';
import bitter from 'assets/images/bitter.png';
import sour from 'assets/images/sour.png';
import drop from 'assets/images/drop.png';
import bean from 'assets/images/bean.png';

export function ProductCharacteristics() {
  return (
    <List>
      <Item>
        <Tip>
          <TipText>
            Кислинка: <Estimate>4/5</Estimate>
          </TipText>
        </Tip>
        <Icon>
          <Img src={sour} alt="bitter icon" />
        </Icon>
        {/* <Characteristic>Кислинка:</Characteristic> */}
        {/* <Estimate>4/5</Estimate> */}
        {/* <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </CircleItem>
        </CircleList> */}
      </Item>
      <Item>
        <Tip>
          <TipText>
            Гірчинка: <Estimate>1/5</Estimate>
          </TipText>
        </Tip>
        <Icon3>
          <Img src={bitter} alt="bitter icon" />
        </Icon3>
        {/* <Characteristic>Міцність:</Characteristic> */}
        {/* <Estimate>3/5</Estimate> */}
        {/* <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </CircleList> */}
      </Item>
      <Item>
        <Tip>
          <TipText>
            Насиченість: <Estimate>5/5</Estimate>
          </TipText>
        </Tip>
        <Icon2>
          <Img src={drop} alt="bitter icon" />
        </Icon2>
        {/* <Characteristic>Гірчинка:</Characteristic> */}
        {/* <Estimate>4/5</Estimate> */}
        {/* <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
          </CircleItem>
        </CircleList> */}
      </Item>
      <Item>
        <Tip>
          <TipText>
            Міцність: <Estimate>3/5</Estimate>
          </TipText>
        </Tip>
        <Icon1>
          <Img src={bean} alt="bitter icon" />
        </Icon1>
        {/* <Characteristic>Насиченість:</Characteristic> */}
        {/* <Estimate>2/5</Estimate> */}
        {/* <CircleList>
          <CircleItem>
            <Circle />
            <Circle />
            <Circle />
            <Circle gray />
            <Circle gray />
          </CircleItem>
        </CircleList> */}
      </Item>
    </List>
  );
}
