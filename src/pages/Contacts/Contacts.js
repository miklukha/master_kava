import { Title, Feedback, ModalFeedback } from 'components';
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
import { useState } from 'react';

export function Contacts({ closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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

          <Feedback
            type="button"
            onClick={() => setIsModalOpen(true)}
            style={{ marginBottom: 20 }}
          >
            Форма зворотнього зв'язку
          </Feedback>
        </div>
        <Map />
      </Wrapper>
      {isModalOpen && (
        <ModalFeedback closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
