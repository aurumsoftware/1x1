import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { AddButton, EmptyStateContainer, EmptyStateImage, EmptyStateTitle } from './styles';
import MeetingContext, { MeetingContextValue } from '../../../../contexts/MeetingContext';

interface Props {
  noMeetings?: boolean;
}

const EmptyState: React.FC<Props> = ({ noMeetings = false }) => {
  const { actions } = useContext(MeetingContext);

  const description = noMeetings
    ? 'Busque por algum colega para iniciar uma reunião.'
    : 'Adicione tópicos para conversar com seu líder ou colega, lista de tarefas, notas de reunião e anotações particulates.';
  return (
    <EmptyStateContainer>
      <EmptyStateImage />
      <EmptyStateTitle>Parece meio vazio aqui...</EmptyStateTitle>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        {description}
      </Typography>
      <AddButton onClick={actions?.showNewMeetingForm}>Adicionar</AddButton>
    </EmptyStateContainer>
  );
};

export default EmptyState;
