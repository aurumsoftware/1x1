import React from 'react';
import { Container, StyledCard } from './styles';

interface Props {
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Container>
      <div onClick={onClick}>
        <StyledCard clickable={!!onClick}>{children}</StyledCard>
      </div>
    </Container>
  );
};

export default Card;
