import {
  Link,
  NavItem,
  NavItemFooter,
  NavList,
  NavListFooter,
} from './Nav.styled';

export function Nav({ layout }) {
  return (
    <>
      {layout === 'header' ? (
        <NavList layout={layout}>
          <NavItem>
            <Link to="/">ГОЛОВНА</Link>
          </NavItem>
          <NavItem>
            <Link to="/shop">МАГАЗИН</Link>
          </NavItem>
          <NavItem>
            <Link to="/about-us">ПРО НАС</Link>
          </NavItem>
          <NavItem>
            <Link to="/contacts">КОНТАКТИ</Link>
          </NavItem>
          <NavItem>
            <Link to="/reviews">ВІДГУКИ</Link>
          </NavItem>
          <NavItem>
            <Link to="/payment-delivery">ОПЛАТА ТА ДОСТАВКА</Link>
          </NavItem>
        </NavList>
      ) : (
        <NavListFooter>
          <NavItemFooter>
            <Link to="/">ГОЛОВНА</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/shop">МАГАЗИН</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/about-us">ПРО НАС</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/contacts">КОНТАКТИ</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/reviews">ВІДГУКИ</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/payment-delivery">ОПЛАТА ТА ДОСТАВКА</Link>
          </NavItemFooter>
        </NavListFooter>
      )}
    </>
  );
}
