import { CardActionArea } from '@material-ui/core';
import React from 'react';
import { StyledCard } from './styles';

interface Props {
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ children, onClick }) => {
  const clickable = !!onClick;

  const content = <StyledCard clickable={!!onClick}>{children}</StyledCard>;

  return clickable ? (
    <CardActionArea>
      <div onClick={onClick}>{content}</div>
    </CardActionArea>
  ) : (
    content
  );
};

export default Card;
