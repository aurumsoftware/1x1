import styled from 'styled-components';
import { Typography, ListItem } from '@material-ui/core';

interface ActiveProps {
  isActive: boolean;
}

export const Username = styled(Typography).attrs({ variant: 'subtitle2' })<ActiveProps>`
  transition: all 0.5s ease;
  color: ${({ theme, isActive }): string => theme.palette.secondary[isActive ? 'main' : 'dark']};
`;

export const ActiveStatus = styled.div<ActiveProps>`
  ${({ theme, isActive }): string =>
    isActive
      ? `
    transition: all 0.5s ease;
    width: 6px;
    background-color: ${theme.palette.primary.main};
    height: 56px;
    border-radius: 0 100px 100px 0;
  `
      : 'padding-left: 6px'}
`;

export const UserItem = styled(ListItem).attrs({ button: true })<ActiveProps>`
  padding: ${({ theme, isActive }): string => (isActive ? 0 : theme.spacings.xs)} 0;
`;
