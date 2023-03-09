import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const ContactsItem = styled.li`
  padding: 5px;

  transition: color ${utils.transitDur} ${utils.transitFunc},
    background-color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    background-color: ${colors.mainBg};
    border-radius: ${utils.borderRadius};
    color: ${colors.accent};
  }
`;

export const ContactsWrapper = styled.ul`
  font-weight: 500;

  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 14px;

    height: 80px;
    padding-left: 10px;
    padding-right: 10px;

    color: ${colors.whiteText};
    background-color: ${colors.accent};
  }
`;
