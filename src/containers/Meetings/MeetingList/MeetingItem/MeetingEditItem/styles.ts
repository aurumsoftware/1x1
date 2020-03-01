import { Divider as MuiDivider } from '@material-ui/core';
import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Divider = styled(MuiDivider)`
  margin: ${({ theme }): string => theme.spacings.md} 0;
`;
