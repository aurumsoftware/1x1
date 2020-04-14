import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): string => theme.spacings.lg};
`;

export const Title = styled.div`
  display: flex;
`;
