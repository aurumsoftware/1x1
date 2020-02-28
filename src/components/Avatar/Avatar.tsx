import React from 'react';
import { StyledAvatar } from './styles';

interface Props {
  src: string;
}

const Avatar: React.FC<Props> = ({ src }) => {
  return <StyledAvatar alt="User profile picture" src={src} />;
};

export default Avatar;
