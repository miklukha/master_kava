import {
  Section,
  TitleHome,
  ProductCard,
  WatchMore,
  NavigationStyles,
} from 'components';
import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import toast from 'react-hot-toast';

export function Popular() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function getProducts() {
      try {
        const products = await API.getProducts();
        setProducts(products);
      } catch (error) {
        toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
        console.log(error);
      }
    })();
    // const products = getProducts();
    // setProducts(products);
  }, []);

  return (
    <Section>
      <TitleHome>Популярні товари</TitleHome>
      <NavigationStyles>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          wrapperTag="ul"
          style={{
            marginBottom: 20,
            position: 'relative',
          }}
        >
          {products &&
            products.map(product => (
              <SwiperSlide tag="li" key={product._id}>
                <ProductCard as="div" home={true} product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </NavigationStyles>
      <WatchMore to="/shop">Подивитися всі товари</WatchMore>
    </Section>
  );
}
