import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import React, { useState } from 'react';
import { Meeting, Task } from '../../../../../../types';
import Card from '../../../../../components/Card';
import Chip from '../../../../../components/Chip/Chip';
import DateField from '../../../../../components/DateField';
import { Content, Header } from '../styles';

interface Props {
  meeting: Meeting;
  onEdit: () => void;
}

const MeetingDisplayItem: React.FC<Props> = ({ meeting, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { meetingDate, meetingTitle, checklist = [] } = meeting;

  const countDoneTasks = (acc: number, item: Task): number => (item.checked ? acc + 1 : acc);

  const doneCount = checklist.reduce(countDoneTasks, 0);

  const handleToggleConfirmationModal = (e: any): void => {
    if (e) e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (): void => {
    try {
    } catch (error) {}
  };

  return (
    <Card onClick={onEdit}>
      <Content>
        <div>
          <Header>
            <Typography variant="h5" color="secondary">
              {meetingTitle}
            </Typography>
            <Chip color="primary" label={`${doneCount} de ${checklist.length}`} margin />
          </Header>
          <DateField date={new Date(meetingDate)} />
        </div>
        <IconButton color="primary" aria-label="delete" onClick={handleToggleConfirmationModal}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={isModalOpen}
          keepMounted
          onClose={handleToggleConfirmationModal}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{'Você deseja remover a reunião?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Ao remover a reunião, a outra parte também não poderá mais visualizá-la.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleToggleConfirmationModal}>
              Cancelar
            </Button>
            <Button color="primary" onClick={handleToggleConfirmationModal}>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </Content>
    </Card>
  );
};

export default MeetingDisplayItem;
