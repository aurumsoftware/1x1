import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.spacings.lg} 0`};
`;

export const Title = styled.div`
  display: flex;
`;
