import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Feedback = styled.button`
  /* font-weight: ${({ contacts }) => contacts && 500}; */
  text-decoration-line: underline;
  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
