import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';
import { colors, fontSizes, utils } from 'styles/utils/variables';

export const Btn = styled.button`
  position: absolute;

  width: 20px;
  height: 20px;

  color: ${colors.iconGray};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const Icon = styled(IoMdClose)`
  font-size: ${fontSizes.mobileTitle};
`;
