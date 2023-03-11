import { NavItem, NavList, NavListFooter, NavItemFooter } from './Nav.styled';

export function Nav({ layout }) {
  return (
    <>
      {layout === 'header' ? (
        <NavList layout={layout}>
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
      ) : (
        <NavListFooter>
          <NavItemFooter>
            <a href="/">ГОЛОВНА</a>
          </NavItemFooter>
          <NavItemFooter>
            <a href="/">МАГАЗИН</a>
          </NavItemFooter>
          <NavItemFooter>
            <a href="/">ПРО НАС</a>
          </NavItemFooter>
          <NavItemFooter>
            <a href="/">КОНТАКТИ</a>
          </NavItemFooter>
          <NavItemFooter>
            <a href="/">ОПЛАТА ТА ДОСТАВКА</a>
          </NavItemFooter>
        </NavListFooter>
      )}
    </>
  );
}
