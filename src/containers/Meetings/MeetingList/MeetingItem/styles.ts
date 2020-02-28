import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacings.sm};
`;

export const Header = styled.div`
  display: flex;
`;
