import { ModalLogin, ModalRegistration } from 'components';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as API from 'services/authApi';
import { DropDownItem, DropDownMenu } from './DropDown.styled';

export function DropDown({ setIsModalOpen, onSetDropDown }) {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const closeRegistrationModal = () => {
    setIsRegistrationOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const onLogout = async () => {
    try {
      await API.logout();
      localStorage.setItem('token', '');
      setIsLoggedIn(false);
      onSetDropDown();
      toast.success('Вихід пройшов успішно');
      setIsLoggedIn(true);
    } catch (error) {
      localStorage.setItem('token', '');
      navigate('/', { replace: true });
      setIsLoggedIn(false);
      toast.error('Час сесії вийшов');
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (isLoginOpen || isRegistrationOpen) {
  //     onSetDropDown();
  //   }
  // }, [isLoginOpen, isRegistrationOpen, onSetDropDown]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    }

    if (!token) {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    setIsModalOpen(isLoginOpen || isRegistrationOpen);
  }, [isLoginOpen, isRegistrationOpen, setIsModalOpen]);

  return (
    <>
      <DropDownMenu>
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <DropDownItem>
              <button type="button" onClick={onLogout}>
                Вихід
              </button>
            </DropDownItem>
            <DropDownItem>
              <Link to="/profile">Профіль</Link>
            </DropDownItem>
          </>
        )}
      </DropDownMenu>
      {isRegistrationOpen && (
        <ModalRegistration
          closeModal={closeRegistrationModal}
          onLoginOpen={() => setIsLoginOpen(true)}
        />
      )}
      {isLoginOpen && (
        <ModalLogin
          closeModal={closeLoginModal}
          onSetDropDown={onSetDropDown}
        />
      )}
    </>
  );
}
