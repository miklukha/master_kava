import { ProductCharacteristics, Button } from 'components';
import {
  Link,
  Item,
  Img,
  Name,
  Ingredients,
  Price,
} from './ProductCard.styled';

export function ProductCard({ product, home }) {
  const { _id, image, category, price, characteristics, name } = product;

  return (
    <Item as={home && 'div'}>
      <Link to={`/shop/${_id}`}>
        <Img src={image} alt={name} />
        <Name>{name}</Name>
        <Ingredients>{category.name}</Ingredients>
        <ProductCharacteristics characteristics={characteristics} />
        <Price>{price} грн</Price>
        <Button type="button" onClick={() => console.log('add to the cart')}>
          До кошика
        </Button>
      </Link>
    </Item>
  );
}
