import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }): string => theme.spacings.md};
`;

export const Title = styled.div`
  display: flex;
`;
