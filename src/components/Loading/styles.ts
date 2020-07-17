import styled from 'styled-components';

export interface LoadingProps {
  noMargin?: boolean;
  size?: number;
}

export const LoadingContainer = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  ${({ theme, noMargin = false }): string => (noMargin ? '' : `margin-top: ${theme.spacings.lg};`)}
`;
