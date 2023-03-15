import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { CartDropDown, Contacts, DropDown } from 'components';
import { breakpoints } from 'styles/utils/variables';
import { BurgerBtn, Item, List, Wrapper } from './ExtraNav.styled';
import { UilBars, UilUser, UilShoppingBag } from '@iconscout/react-unicons';

export function ExtraNav({ handleClick }) {
  const [dropdown, setDropdown] = useState(false);
  const [cartDropDown, setCartDropDown] = useState(false);

  return (
    <Wrapper>
      <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
        <Contacts />
      </MediaQuery>
      <List>
        <Item
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <UilUser />
          {dropdown && <DropDown />}
        </Item>
        <Item
          onMouseEnter={() => setCartDropDown(true)}
          onMouseLeave={() => setCartDropDown(false)}
        >
          <UilShoppingBag />
          {cartDropDown && <CartDropDown />}
        </Item>
      </List>
      <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
        <BurgerBtn
          type="button"
          aria-label="відкрити мобільне меню"
          onClick={handleClick}
        >
          <UilBars />
        </BurgerBtn>
      </MediaQuery>
    </Wrapper>
  );
}
