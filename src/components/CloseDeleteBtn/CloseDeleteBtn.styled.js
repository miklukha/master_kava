import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Btn = styled.button`
  position: absolute;
  line-height: 0;

  color: ${colors.iconGray};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

// export const Icon = styled(UilTimes)`
//   /* width: 20px;
//   height: 20px; */
//   /* font-size: ${fontSizes.mobileTitle}; */
// `;
