import { NavItem, NavList } from './Nav.styled';

export function Nav() {
  return (
    <NavList>
      <NavItem>
        <a href="/">ГОЛОВНА</a>
      </NavItem>
      <NavItem>
        <a href="/">МАГАЗИН</a>
      </NavItem>
      <NavItem>
        <a href="/">ПРО НАС</a>
      </NavItem>
      <NavItem>
        <a href="/">КОНТАКТИ</a>
      </NavItem>
      <NavItem>
        <a href="/">ОПЛАТА ТА ДОСТАВКА</a>
      </NavItem>
    </NavList>
  );
}
