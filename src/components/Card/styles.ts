import { Card } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  clickable: boolean;
}

export const StyledCard = styled(Card)<Props>`
  && {
    border: 2px solid ${({ theme }): string => theme.palette.secondary.light};
    ${({ theme }): string => `padding: ${theme.spacings.md} ${theme.spacings.lg};`}
    box-shadow: ${({ clickable }): string => (clickable ? 'none' : '0 1px 8px 1px rgba(0,0,0,0.15)')};
    border-radius: 8px;
    transition: all 0.5s ease;
    &:hover {
      background-color: white;
      ${({ theme, clickable }): string => (clickable ? `border-color: ${theme.palette.primary.main}` : '')}
    }
  }
`;
