import { css } from '@emotion/css';
import { UilBars, UilShoppingBag, UilUser } from '@iconscout/react-unicons';
import { CartDropDown, Contacts, DropDown } from 'components';
import { useEffect, useRef, useState } from 'react';
import MediaQuery from 'react-responsive';
import { breakpoints, colors } from 'styles/utils/variables';
import { BurgerBtn, Item, List, Wrapper } from './ExtraNav.styled';

export function ExtraNav({ handleClick }) {
  const [dropdown, setDropdown] = useState(false);
  const [cartDropDown, setCartDropDown] = useState(false);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );
  const [isCartData, setIsCartData] = useState(
    cartData.length !== 0 ? true : false
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartDropDownRef = useRef(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const onStorageChange = () => {
      const updatedCartData =
        JSON.parse(localStorage.getItem('cartData')) || [];
      setCartData(updatedCartData);

      setIsCartData(updatedCartData.length !== 0 ? true : false);
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        (cartDropDownRef.current &&
          !cartDropDownRef.current.contains(e.target) &&
          cartDropDown) ||
        e.target.nodeName === 'A'
      ) {
        setCartDropDown(false);
      }

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        dropdown &&
        !isModalOpen
      ) {
        setDropdown(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdown, cartDropDown, isModalOpen]);

  const myStyle =
    isCartData &&
    css`
      &::after {
        content: '';
        display: block;
        background-color: ${colors.accent};
        width: 8px;
        height: 8px;
        border-radius: 50%;

        position: absolute;
        top: 15px;
        right: 11px;
      }
    `;

  return (
    <Wrapper>
      <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
        <Contacts />
      </MediaQuery>
      <List>
        <Item onClick={() => setDropdown(true)} ref={dropDownRef}>
          <UilUser />
          {dropdown && <DropDown setIsModalOpen={setIsModalOpen} />}
        </Item>
        <Item
          onClick={() => setCartDropDown(true)}
          ref={cartDropDownRef}
          className={myStyle}
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
