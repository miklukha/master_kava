import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { CartDropDown, Contacts, DropDown } from 'components';
import { breakpoints } from 'styles/utils/variables';
import { BurgerBtn, Item, List, Wrapper } from './ExtraNav.styled';
import { CgShoppingCart as CartIcon } from 'react-icons/cg';
import { GiHamburgerMenu as BurgerIcon } from 'react-icons/gi';
import { VscAccount as ProfileIcon } from 'react-icons/vsc';

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
          <ProfileIcon />
          {dropdown && <DropDown />}
        </Item>
        <Item
          onMouseEnter={() => setCartDropDown(true)}
          onMouseLeave={() => setCartDropDown(false)}
        >
          <CartIcon />
          {cartDropDown && <CartDropDown />}
        </Item>
      </List>
      <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
        <BurgerBtn
          type="button"
          aria-label="open mobile menu"
          onClick={handleClick}
        >
          <BurgerIcon />
        </BurgerBtn>
      </MediaQuery>
    </Wrapper>
  );
}
