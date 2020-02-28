import { CardActionArea } from '@material-ui/core';
import React from 'react';
import { StyledCard } from './styles';

interface Props {
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ children, onClick }) => {
  return (
    <CardActionArea>
      <div onClick={onClick}>
        <StyledCard clickable={!!onClick}>{children}</StyledCard>
      </div>
    </CardActionArea>
  );
};

export default Card;
