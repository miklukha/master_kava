import {
  List,
  Item,
  Icon,
  Img,
  Tip,
  TipText,
  Estimate,
} from './ProductCharacteristics.styled';
import bitter from 'assets/images/bitter.png';
import sour from 'assets/images/sour.png';
import drop from 'assets/images/drop.png';
import bean from 'assets/images/bean.png';

export function ProductCharacteristics({ characteristics }) {
  const { sourness, bitterness, sturdiness, saturation } = characteristics;
  return (
    <List
      onClick={e => {
        e.preventDefault();
      }}
    >
      <Item>
        <Tip>
          <TipText>
            Кислинка: <Estimate>{sourness}/5</Estimate>
          </TipText>
        </Tip>
        <Icon estimate={sourness}>
          <Img src={sour} alt="sourness icon" />
        </Icon>
      </Item>
      <Item>
        <Tip>
          <TipText>
            Гірчинка: <Estimate>{bitterness}/5</Estimate>
          </TipText>
        </Tip>
        <Icon estimate={bitterness}>
          <Img src={bitter} alt="bitterness icon" />
        </Icon>
      </Item>
      <Item>
        <Tip>
          <TipText>
            Насиченість: <Estimate>{sturdiness}/5</Estimate>
          </TipText>
        </Tip>
        <Icon estimate={sturdiness}>
          <Img src={drop} alt="sturdiness icon" />
        </Icon>
      </Item>
      <Item>
        <Tip>
          <TipText>
            Міцність: <Estimate>{saturation}/5</Estimate>
          </TipText>
        </Tip>
        <Icon estimate={saturation}>
          <Img src={bean} alt="saturation icon" />
        </Icon>
      </Item>
    </List>
  );
}
