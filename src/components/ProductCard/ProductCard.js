import { ProductCharacteristics, Button } from 'components';
import {
  Link,
  Item,
  Img,
  Name,
  Ingredients,
  Price,
} from './ProductCard.styled';
import productCard from 'assets/images/productCard.png';

export function ProductCard({ ingredients }) {
  return (
    <Item>
      <Link href="">
        <Img src={productCard} alt="coffee Brasil" />
        <Name>Кава Brasil</Name>
        <Ingredients>{ingredients}</Ingredients>
        <ProductCharacteristics />
        <Price>655 грн</Price>
        <Button type="button" onClick={() => console.log('add to the cart')}>
          До кошика
        </Button>
      </Link>
    </Item>
  );
}
