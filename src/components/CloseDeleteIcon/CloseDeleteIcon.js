import { css } from '@emotion/css';
import { Btn, Icon } from './CloseDeleteIcon.styled';

export function CloseDeleteIcon({ remove, handleClick }) {
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
      aria-label="close"
      onClick={handleClick}
    >
      <Icon />
    </Btn>
  );
}
