import React, { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface Props {
  id?: string;
  name?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  onChange: (eventOrPath: string | ChangeEvent<any>) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void);
  value: string;
}

const TextInput: React.FC<Props> = ({ id, name, type = 'text', onChange, value, placeholder }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></StyledInput>
  );
};

export default TextInput;
