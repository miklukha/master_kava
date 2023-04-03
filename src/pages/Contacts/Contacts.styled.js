import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const Wrapper = styled.div`
  ${mq.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactsList = styled.ul`
  margin-bottom: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ContactsLink = styled.a`
  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const Map = styled.div`
  width: 360px;
  height: 163px;
  background-color: gray;

  ${mq.tablet} {
    width: 385px;
    height: 153px;
  }

  ${mq.desktop} {
    width: 636px;
    height: 260px;
  }
`;
