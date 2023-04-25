import styled from '@emotion/styled';
import { colors, fontSizes } from 'styles/utils/variables';
import { TextField } from '@mui/material';

export const InputForm = styled(TextField)`
  margin-bottom: 10px;
  width: 100%;
  background-color: ${colors.mainBg};

  & input {
    font-size: ${fontSizes.s};
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }
`;
