import styled from 'styled-components';

export interface PropTypes {
  label?: string;
  color: 'primary' | 'secondary';
  margin?: boolean;
}

export const StyledChip = styled.span<PropTypes>`
  padding: 0 ${({ theme }): string => theme.spacings.xs};
  border: 1px solid ${({ theme, color }): string => theme.palette[color].main};
  border-radius: 4px;
  ${({ margin, theme }): string => (margin ? `margin: 0 ${theme.spacings.xs}` : '')}
`;
