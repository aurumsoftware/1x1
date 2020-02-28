import React, { useContext } from 'react';
import { StyledCard } from './styles';
import { ThemeContext } from 'styled-components';

interface Props {}

const Card: React.FC<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);

  console.log('THEME', theme);

  return <StyledCard>{children}</StyledCard>;
};

export default Card;
