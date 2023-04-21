import { ProductCharacteristics } from 'components';
import slugify from 'slugify';
import {
  Img,
  Ingredients,
  Item,
  Link,
  Name,
  Price,
} from './ProductCard.styled';

export function ProductCard({ product, home }) {
  const { _id, image, category, price, characteristics, name } = product;

  const makeSlug = string => slugify(string, { lower: true });

  return (
    <Item as={home && 'div'}>
      <Link to={`/shop/${makeSlug(`${name} ${_id}`)}`}>
        <Img src={image} alt={name} />
        <Name>{name}</Name>
        <Ingredients>{category.name}</Ingredients>
        <ProductCharacteristics characteristics={characteristics} />
        <Price>{price} грн (за 100г)</Price>
      </Link>
    </Item>
  );
}
