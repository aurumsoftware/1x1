import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }): string => theme.spacings.lg};
`;
