import { DropDownMenu, DropDownItem } from './DropDown.styled';
import { useState } from 'react';
import { ModalRegistration, ModalLogin } from 'components';

export function DropDown() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const closeModal = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(false);
  };

  return (
    <>
      <DropDownMenu>
        <DropDownItem>
          <button type="button" onClick={() => setIsLoginOpen(true)}>
            Вхід
          </button>
        </DropDownItem>
        <DropDownItem>
          <button type="button" onClick={() => setIsRegistrationOpen(true)}>
            Реєстрація
          </button>
        </DropDownItem>
      </DropDownMenu>
      {isRegistrationOpen && <ModalRegistration closeModal={closeModal} />}
      {isLoginOpen && <ModalLogin closeModal={closeModal} />}
    </>
  );
}
