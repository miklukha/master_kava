import { Description, List, Item, Text } from './DescCharacteristics.styled';

export function DescCharacteristics({ product }) {
  return (
    <>
      <Description>{product.description}</Description>
      <List>
        <Item>
          <Text>Склад</Text>
          <Text>{product.category}</Text>
        </Item>
        <Item>
          <Text>Ступінь обсмаження</Text>
          <Text>{product.roastLevel}</Text>
        </Item>
        <Item>
          <Text>Країна походження</Text>
          <Text>{product.countries.join(', ')}</Text>
        </Item>
      </List>
    </>
  );
}
