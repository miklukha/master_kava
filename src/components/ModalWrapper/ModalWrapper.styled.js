import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100vw;
  height: 100vh;

  background-color: rgba(47, 48, 58, 0.4);

  /* transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ${utils.transitDur} ${utils.transitFunc}; */
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 445px;
  /* height: 460px; */
  padding: 30px;
  background-color: ${colors.mainBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  /* & .css-1yby867-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  } */
`;
