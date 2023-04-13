import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const DescBtnsWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.auxiliary};
  margin-bottom: 20px;

  ${mq.tablet} {
    gap: 20px;
  }

  ${mq.desktop} {
    gap: 30px;
  }
`;

export const DescBtn = styled.button`
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
  padding: 5px 0;

  color: ${({ selected }) => (selected ? colors.accent : colors.mainText)};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
