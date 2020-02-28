import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCard = styled(Paper)`
  border: 1px solid ${({ theme }): string => theme.palette.secondary.light};
  ${({ theme }): string => `padding: ${theme.spacings.md} ${theme.spacings.lg};`}
  box-shadow: none;
`;
