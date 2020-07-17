import Typography from '@material-ui/core/Typography';
import React from 'react';
import { AddButton, EmptyStateContainer, EmptyStateImage } from './styles';

interface Props {
  onClickAdd: () => void;
}

const EmptyState: React.FC<Props> = ({ onClickAdd }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateImage />
      <Typography variant="h6" color="secondary">
        Parece meio vazio aqui...
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Adicione tópicos para conversar com seu líder ou colega, lista de tarefas, notas de reunião e anotações
        particulates.
      </Typography>
      <AddButton onClick={onClickAdd}>Adicionar</AddButton>
    </EmptyStateContainer>
  );
};

export default EmptyState;
