import React from 'react';
import { StyledInput, TextInputProps } from './styles';

const TextInput: React.FC<TextInputProps> = ({ id, name, fontSize, fontWeight, onChange, value, placeholder }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      fontSize={fontSize}
      fontWeight={fontWeight}
    ></StyledInput>
  );
};

export default TextInput;
