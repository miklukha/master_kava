import { List, Item, Img, Name } from './CookingIcons.styled';

export function CookingIcons() {
  // на сторінці товару по умові (хуки) поряд рендерити чи ні назву іконки (кавоварка, турка і тд)

  return (
    <List>
      <Item>
        <Img></Img>
        <Name></Name>
      </Item>
      <Item>
        <Img></Img>
        <Name></Name>
      </Item>
      <Item>
        <Img></Img>
        <Name></Name>
      </Item>
      <Item>
        <Img></Img>
        <Name></Name>
      </Item>
    </List>
  );
}
