import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import PersonAdd from '@material-ui/icons/PersonAdd';

export const Container = styled.div`
  padding: 12px 16px;
  background: ${({ theme }): string => theme.palette.gray.gray100};
  align-items: center;
  display: flex;
  border-radius: 8px;
`;

export const StyledPersonAdd = styled(PersonAdd)`
  color: ${({ theme }): string => theme.palette.secondary.dark};
`;

export const StyledInput = styled.input`
  background: ${({ theme }): string => theme.palette.gray.gray100};
  margin-left: 20px;
  width: 100%;
  border: 0px;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ theme }): string => theme.palette.secondary.dark};
  ::placeholder {
    opacity: 25%;
  }
`;

export const SuggestionContainer = styled.div`
  background: ${({ theme }): string => theme.palette.gray.gray100};
  border-radius: 8px;
  z-index: 1;
  position: absolute;
  width: 100%;
`;

export const SuggestionItem = styled(Typography)`
  padding: 12px;
  color: ${({ theme }): string => theme.palette.secondary.dark};
`;
