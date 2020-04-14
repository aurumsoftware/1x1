import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Username = styled(Typography).attrs({ variant: 'subtitle2' })`
  color: ${({ theme }): string => theme.palette.secondary.dark};
`;
