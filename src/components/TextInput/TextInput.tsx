import React, { ChangeEvent } from 'react';
import { StyledInput, TextInputProps } from './styles';

const TextInput: React.FC<TextInputProps> = ({ id, name, fontSize, onChange, value, placeholder }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      fontSize={fontSize}
    ></StyledInput>
  );
};

export default TextInput;
