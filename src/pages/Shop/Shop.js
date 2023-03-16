import { useState } from 'react';
import {
  Container,
  FilterDropdown,
  Section,
  ShopFilter,
  Title,
  Backdrop,
  ProductCard,
} from 'components';
import { Header, Footer } from 'layouts';
import { UilFilter } from '@iconscout/react-unicons';
import { breakpoints } from 'styles/utils/variables';
import MediaQuery from 'react-responsive';
import {
  FilterBtn,
  FiltersWrapper,
  ProductList,
  ContentWrapper,
} from './Shop.styled';
import { filterOptions } from 'helpers';

export function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const onFilterClick = () => setIsFilterOpen(!isFilterOpen);

  return (
    <>
      <Header />
      <Section>
        <Container>
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
        </Container>
      </Section>
      <Footer />
    </>
  );
}
