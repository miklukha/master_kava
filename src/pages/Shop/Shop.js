import { UilFilter } from '@iconscout/react-unicons';
import {
  Backdrop,
  FilterDropdown,
  ProductCard,
  ShopFilter,
  Title,
} from 'components';
import { filterOptions } from 'helpers';
import { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';
import {
  ContentWrapper,
  FilterBtn,
  FiltersWrapper,
  ProductList,
} from './Shop.styled';
import { toast } from 'react-hot-toast';
// import { getProducts } from 'services/fakeApi';
import * as API from 'services/api';
import { useNavigate } from 'react-router-dom';

export function Shop() {
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const navigate = useNavigate();
  const onFilterClick = () => setIsFilterOpen(!isFilterOpen);

  useEffect(() => {
    (async function getProducts() {
      try {
        switch (selectedOption.value) {
          case 'popular':
            const popular = await API.getProductsPopular();
            setProducts(popular);
            break;
          case 'low':
            const asc = await API.getProductsAsc();
            setProducts(asc);
            break;
          case 'high':
            const desc = await API.getProductsDesc();
            setProducts(desc);
            break;
          default:
            const products = await API.getProducts();
            setProducts(products);
        }
      } catch (error) {
        toast.error('Щось пішло не так :(( Спробуйте, будь ласка, пізніше!');
        navigate('/', { replace: true });
        console.log(error);
      }
    })();
    // const products = getProducts();
    // setProducts(products);
  }, [navigate, selectedOption]);

  return (
    <>
      <Title>Кава</Title>
      <FiltersWrapper>
        <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
          <FilterBtn
            type="button"
            aria-label="відкрити фільтр"
            onClick={onFilterClick}
          >
            <UilFilter width="20px" height="22px" />
          </FilterBtn>
          {isFilterOpen && (
            <Backdrop open={isFilterOpen}>
              <ShopFilter
                handleClick={onFilterClick}
                onSetProducts={products => setProducts(products)}
              />
            </Backdrop>
          )}
        </MediaQuery>
        <FilterDropdown
          filterOptions={filterOptions}
          selectedOption={selectedOption}
          onSetOption={option => setSelectedOption(option)}
        />
      </FiltersWrapper>
      <ContentWrapper>
        <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
          <ShopFilter onSetProducts={products => setProducts(products)} />
        </MediaQuery>

        <ProductList>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductList>
      </ContentWrapper>
    </>
  );
}
