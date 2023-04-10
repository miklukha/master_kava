import {
  Section,
  Container,
  TitleHome,
  ProductCard,
  WatchMore,
} from 'components';
import { List } from './Popular.styled';
import * as API from 'services/api';
import { useState, useEffect } from 'react';

// import { getProducts } from 'services/fakeApi';

export function Popular() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function getProducts() {
      try {
        const products = await API.getProducts();
        setProducts(products);
      } catch (error) {
        // toast.error('Film is not found');
        // navigate('/', { replace: true });
        // console.log(error);
      }
    })();
    // const products = getProducts();
    // setProducts(products);
  }, []);
  // const products = getProducts().slice(0, 4);
  // in tablet version only 3 cards
  return (
    <Section>
      <Container>
        <TitleHome>Популярні товари</TitleHome>
        <List>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </List>
        <WatchMore to="/shop">Подивитися всі товари</WatchMore>
      </Container>
    </Section>
  );
}
