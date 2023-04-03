import { Container, Section, Title, Feedback } from 'components';
import { Footer, Header } from 'layouts';
import {
  ContactsList,
  ContactsItem,
  ContactsLink,
  Wrapper,
  Map,
} from './Contacts.styled';
import {
  UilMapMarker,
  UilPhoneAlt,
  UilEnvelopeAlt,
  UilClock,
} from '@iconscout/react-unicons';

export function Contacts() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Title>КОНТАКТИ</Title>
          <Wrapper>
            <div>
              <ContactsList>
                <ContactsItem>
                  <UilMapMarker width="30px" height="30px" />
                  <ContactsLink href="/">
                    м. Київ, вул. Сім’ї Сосняних 11
                  </ContactsLink>
                </ContactsItem>
                <ContactsItem>
                  <UilEnvelopeAlt width="30px" height="30px" />
                  <ContactsLink href="mailto:master_kava@gmail.com">
                    master_kava@gmail.com
                  </ContactsLink>
                </ContactsItem>
                <ContactsItem>
                  <UilPhoneAlt width="30px" height="30px" />
                  <ContactsLink href="tel:+380671429022">
                    +380671429022
                  </ContactsLink>
                </ContactsItem>
                <ContactsItem>
                  <UilClock width="30px" height="30px" />
                  <span>Пн.-Пт. з 10:00 до 18:00 | Сб Нд – вихідні</span>
                </ContactsItem>
              </ContactsList>

              <Feedback style={{ marginBottom: 20 }}>
                Форма зворотнього зв'язку
              </Feedback>
            </div>
            <Map />
          </Wrapper>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
