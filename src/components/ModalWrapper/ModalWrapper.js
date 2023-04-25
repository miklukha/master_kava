import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './ModalWrapper.styled';

export function ModalWrapper({ closeModal, children }) {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    const root = document.getElementById('root');
    const bodyStyle = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    root.style.pointerEvents = 'none';
    bodyStyle.overflow = 'hidden';
    bodyStyle.paddingRight = `${scrollbarWidth}px`;

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      root.style.pointerEvents = 'auto';
      bodyStyle.overflow = 'visible';
      bodyStyle.paddingRight = 0;
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
}
