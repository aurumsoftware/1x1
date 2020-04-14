import styled from 'styled-components';
import ExpandMore from '@material-ui/icons/ExpandMore';

export const Container = styled.div`
  padding: ${({ theme }): string => `${theme.spacings.lg} ${theme.spacings.md}`};
  display: flex;
  align-items: center;
`;

export const NameAndOptions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled(ExpandMore)`
  color: ${({ theme }): string => theme.palette.secondary.dark};
`;
