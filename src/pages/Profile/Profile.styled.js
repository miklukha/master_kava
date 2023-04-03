import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const ProfileMenu = styled.div`
  width: 100%;
  padding: 20px 15px;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.auxiliaryBg};
  ${mq.tablet} {
    width: 240px;
    /* height: 196px; */
  }

  ${mq.desktop} {
    width: 270px;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${colors.mainText};
`;

export const ProfileName = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const ProfileEmail = styled.span`
  color: ${colors.auxiliaryText};
`;

export const ProfileList = styled.ul``;

export const ProfileItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ProfileBtn = styled.button`
  color: ${({ selected }) => selected && colors.accent};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
