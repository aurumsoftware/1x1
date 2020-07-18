import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { AddButton, EmptyStateContainer, EmptyStateImage, EmptyStateTitle } from './styles';
import MeetingContext, { MeetingContextValue } from '../../../../contexts/MeetingContext';

const EmptyState: React.FC = () => {
  const { actions } = useContext(MeetingContext);

  console.log('actions', actions);

  return (
    <EmptyStateContainer>
      <EmptyStateImage />
      <EmptyStateTitle>Parece meio vazio aqui...</EmptyStateTitle>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Adicione tópicos para conversar com seu líder ou colega, lista de tarefas, notas de reunião e anotações
        particulates.
      </Typography>
      <AddButton onClick={actions?.showNewMeetingForm}>Adicionar</AddButton>
    </EmptyStateContainer>
  );
};

export default EmptyState;
