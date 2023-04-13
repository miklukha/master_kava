import { coffeeFilter, geyser, machine, turka } from 'assets/images';
import { CookingMethod, Img, Item, List, Title } from './CookingMethods.styled';

export function CookingMethods() {
  return (
    <>
      <Title>Рекомендовані способи приготування:</Title>
      <List>
        <Item>
          <Img src={turka} />
          <CookingMethod>Турка</CookingMethod>
        </Item>
        <Item>
          <Img src={machine} />
          <CookingMethod>Кавомашина (еспресо)</CookingMethod>
        </Item>
        <Item>
          <Img src={geyser} />
          <CookingMethod>Гейзер</CookingMethod>
        </Item>
        <Item>
          <Img src={coffeeFilter} />
          <CookingMethod>Фільтр кавоварка</CookingMethod>
        </Item>
      </List>
    </>
  );
}
