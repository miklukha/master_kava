import { deliveryBox, deliveryReturn, deliveryTruck } from 'assets/images';
import { Container, Section } from 'components';
import { BgIcon, Desc, Img, Item, List, Title } from './Features.styled';
import { visuallyHidden } from 'styles/utils/visuallyHidden';

export function Features() {
  return (
    <Section>
      <Container>
        <h2 className={visuallyHidden}>Наші переваги</h2>
        <List>
          <Item>
            <BgIcon>
              <Img src={deliveryTruck} alt="delivery truck" />
            </BgIcon>
            <Title>Доставка по Україні</Title>
            <Desc>
              Вартість доставки згідно з тарифами служб доставки (Нова Пошта,
              Укрпошта, Meest)
            </Desc>
          </Item>
          <Item>
            <BgIcon>
              <Img src={deliveryBox} alt="delivery box" />
            </BgIcon>
            <Title>Самовивіз В КИЄВІ</Title>
            <Desc>
              Забрати замовлення можна в нашому офісі за адресою: вулиця Сім’ї
              Сосняних 11
            </Desc>
          </Item>
          <Item>
            <BgIcon>
              <Img src={deliveryReturn} alt="return delivery" />
            </BgIcon>
            <Title>ОБМІН/ПОВЕРНЕННЯ</Title>
            <Desc>
              14 днів з дня покупки відповідно до “Закону про захист прав
              споживача”
            </Desc>
          </Item>
        </List>
      </Container>
    </Section>
  );
}
