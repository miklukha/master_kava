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
// import { getProducts } from 'services/fakeApi';
import * as API from 'services/api';

export function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [products, setProducts] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const onFilterClick = () => setIsFilterOpen(!isFilterOpen);

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
              <ShopFilter handleClick={onFilterClick} />
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
          <ShopFilter />
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
