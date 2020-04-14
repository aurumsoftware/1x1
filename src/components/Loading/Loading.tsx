import React from 'react';
import { LoadingContainer } from './styles';
import { CircularProgress } from '@material-ui/core';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};
export default Loading;
