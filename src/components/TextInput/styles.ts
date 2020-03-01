import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ theme }): string => theme.palette.secondary.main};
  ::placeholder {
    opacity: 25%;
  }
`;
