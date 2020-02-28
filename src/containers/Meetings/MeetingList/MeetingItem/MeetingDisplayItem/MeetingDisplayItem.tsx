import { IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
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
  const { meetingDate, meetingTitle, checklist = [] } = meeting;

  const countDoneTasks = (acc: number, item: Task): number => (item.checked ? acc + 1 : acc);

  const doneCount = checklist.reduce(countDoneTasks, 0);

  return (
    <Card onClick={onEdit}>
      <Content>
        <div>
          <Header>
            <Typography variant="h6" color="secondary">
              {meetingTitle}
            </Typography>
            <Chip color="primary" label={`${doneCount} de ${checklist.length}`} margin />
          </Header>
          <DateField date={new Date(meetingDate)} />
        </div>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Content>
    </Card>
  );
};

export default MeetingDisplayItem;
