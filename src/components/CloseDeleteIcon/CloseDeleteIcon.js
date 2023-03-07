import { Btn, Icon } from './CloseDeleteIcon.styled';
import { css } from '@emotion/css';

export function CloseDeleteIcon(props) {
  const myStyle = props.delete
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
      onClick={props.handleClick}
    >
      <Icon />
    </Btn>
  );
}
