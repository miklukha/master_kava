import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Button = styled.button`
  font-weight: 500;
  text-align: center;

  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: ${utils.borderRadiusOfBtn};

  background-color: ${colors.accent};
  color: ${colors.whiteText};

  transition: box-shadow ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
