import { UilFilter } from '@iconscout/react-unicons';
import {
  Backdrop,
  FilterDropdown,
  ProductCard,
  ShopFilter,
  Title,
} from 'components';
import { filterOptions } from 'helpers';
import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';
import {
  ContentWrapper,
  FilterBtn,
  FiltersWrapper,
  ProductList,
} from './Shop.styled';

export function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const onFilterClick = () => setIsFilterOpen(!isFilterOpen);

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>
      </ContentWrapper>
    </>
  );
}
