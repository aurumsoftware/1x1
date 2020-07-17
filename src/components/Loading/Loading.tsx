import React from 'react';
import { LoadingContainer, LoadingProps } from './styles';
import { CircularProgress } from '@material-ui/core';

const Loading: React.FC<LoadingProps> = ({ size = 40, noMargin }) => {
  return (
    <LoadingContainer noMargin={noMargin}>
      <CircularProgress size={size} />
    </LoadingContainer>
  );
};
export default Loading;
