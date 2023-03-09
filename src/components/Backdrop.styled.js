import styled from '@emotion/styled';
import { utils } from 'styles/utils/variables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100vw;
  height: 100vh;

  background-color: rgba(47, 48, 58, 0.4);

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ${utils.transitDur} ${utils.transitFunc};
`;
