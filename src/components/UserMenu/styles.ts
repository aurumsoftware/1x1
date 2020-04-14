import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }): string => theme.spacings.lg} 0;
  display: flex;
  align-items: center;
`;

export const NameAndOptions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
