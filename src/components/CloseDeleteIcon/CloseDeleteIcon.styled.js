import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';
import { colors, fontSizes } from 'styles/utils/variables';

export const Btn = styled.button`
  position: absolute;
  /* top: 10px;
  right: 10px; */

  /* top: ${props => (props.delete ? 0 : '10px')};

  right: ${props => (props.delete ? 0 : '10px')}; */

  width: 20px;
  height: 20px;

  color: ${colors.iconGray};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const Icon = styled(IoMdClose)`
  font-size: ${fontSizes.mobileTitle};
`;
