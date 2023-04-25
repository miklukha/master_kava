import styled from '@emotion/styled';
import { colors, fontSizes } from 'styles/utils/variables';
import { InputLabel } from '@mui/material';

export const Label = styled(InputLabel)`
  font-size: ${fontSizes.xs};
  color: ${colors.auxiliaryText};
`;
