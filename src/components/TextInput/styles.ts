import styled, { css } from 'styled-components';
import { Size, FontWeight } from '../../../types';
import { ChangeEvent } from 'react';

export interface TextInputProps {
  id: string;
  name: string;
  fontSize?: Size;
  fontWeight?: FontWeight;
  placeholder?: string;
  onChange: (eventOrTextValue: ChangeEvent<any>) => void;
  value: string;
}

export const StyledInput = styled.input<TextInputProps>`
  ${({ theme, fontSize = 'md', fontWeight = 'regular' }): any => css`
    width: 100%;
    border: 0px;
    outline: none;
    font-size: ${theme.typography.sizes[fontSize]};
    font-weight: ${theme.typography.fontWeight[fontWeight]};
    line-height: 24px;
    color: ${theme.palette.secondary.main};
    ::placeholder {
      opacity: 25%;
    }
  `}
`;
