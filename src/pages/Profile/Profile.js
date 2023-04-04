import { useState } from 'react';
import { Container, ProductOrder, Section, Title } from 'components';
import { Footer, Header } from 'layouts';
import {
  OrderDate,
  OrderItem,
  OrderList,
  OrderTitle,
  OrderWrapper,
  ProductOrderList,
  ProductSummary,
  ProfileBtn,
  ProfileEmail,
  ProfileInformation,
  ProfileItem,
  ProfileList,
  ProfileMenu,
  ProfileName,
  SectionTitle,
  SectionWrapper,
  Wrapper,
} from './Profile.styled';
import { UilUser } from '@iconscout/react-unicons';

export function Profile() {
  const [selectedItem, setSelectedItem] = useState('contacts');

  const handleClick = e => {
    setSelectedItem(e.target.value);
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Title>ПРОФІЛЬ</Title>
          <Wrapper>
            <ProfileMenu>
              <ProfileInformation>
                <UilUser width="30px" height="30px" />
                <div>
                  <ProfileName>Тарас</ProfileName>
                  <ProfileEmail>taras@gmail.com</ProfileEmail>
                </div>
              </ProfileInformation>
              <ProfileList>
                <ProfileItem>
                  <ProfileBtn
                    selected={selectedItem === 'contacts'}
                    type="button"
                    value="contacts"
                    aria-label="перейти на сторінку контактна інформація"
                    onClick={e => handleClick(e)}
                  >
                    Контактна інформація
                  </ProfileBtn>
                </ProfileItem>
                <ProfileItem>
                  <ProfileBtn
                    selected={selectedItem === 'password'}
                    type="button"
                    value="password"
                    aria-label="перейти на сторінку зміни паролю"
                    onClick={e => handleClick(e)}
                  >
                    Зміна паролю
                  </ProfileBtn>
                </ProfileItem>
                <ProfileItem>
                  <ProfileBtn
                    selected={selectedItem === 'history'}
                    type="button"
                    value="history"
                    aria-label="перейти на сторінку історія замовлень"
                    onClick={e => handleClick(e)}
                  >
                    Історія замовлень
                  </ProfileBtn>
                </ProfileItem>
              </ProfileList>
            </ProfileMenu>
            {selectedItem === 'contacts' && (
              <>
                <div>Contacts</div>
              </>
            )}
            {selectedItem === 'history' && (
              <SectionWrapper>
                <SectionTitle>Ваші замовлення</SectionTitle>
                <OrderList>
                  <OrderItem>
                    <OrderWrapper>
                      <OrderTitle>Замовлення № 342452-21</OrderTitle>
                      <OrderDate>06.05.2023</OrderDate>
                    </OrderWrapper>
                    <ProductOrderList>
                      <ProductOrder placing />
                      <ProductOrder placing />
                    </ProductOrderList>
                    <ProductSummary>Разом: 1310</ProductSummary>
                  </OrderItem>
                  <OrderItem>
                    <OrderWrapper>
                      <OrderTitle>Замовлення № 342452-21</OrderTitle>
                      <OrderDate>06.05.2023</OrderDate>
                    </OrderWrapper>
                    <ProductOrderList>
                      <ProductOrder placing />
                      <ProductOrder placing />
                    </ProductOrderList>
                    <ProductSummary>Разом: 1310</ProductSummary>
                  </OrderItem>
                </OrderList>
              </SectionWrapper>
            )}
            {selectedItem === 'password' && (
              <>
                <div>password</div>
              </>
            )}
          </Wrapper>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
