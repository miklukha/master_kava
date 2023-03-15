import { css } from '@emotion/css';
import { Btn } from './CloseDeleteBtn.styled';
import { UilTimes } from '@iconscout/react-unicons';

export function CloseDeleteBtn({ remove, handleClick }) {
  const myStyle = remove
    ? css`
        top: -1px;
        right: 0;
      `
    : css`
        top: 10px;
        right: 10px;
      `;

  return (
    <Btn
      className={myStyle}
      type="button"
      aria-label="закрити"
      onClick={handleClick}
    >
      <UilTimes />
    </Btn>
  );
}
