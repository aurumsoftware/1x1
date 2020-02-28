import { Card, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  clickable: boolean;
}

export const StyledCard = styled(Card)<Props>`
  border: 1px solid ${({ theme }): string => theme.palette.secondary.light};
  ${({ theme }): string => `padding: ${theme.spacings.md} ${theme.spacings.lg};`}
  box-shadow: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    ${({ theme, clickable }): string => (clickable ? `border-color: ${theme.palette.primary.main}` : '')}
  }
`;
