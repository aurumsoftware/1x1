import { IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns';
import React from 'react';
import { Meeting, Task } from '../../../../../../types';
import Card from '../../../../../components/Card';
import Chip from '../../../../../components/Chip/Chip';
import { Content, Header } from '../styles';

interface Props {
  meeting: Meeting;
  onEdit: () => void;
}

const useStyles = makeStyles(theme => ({
  meetingDate: {
    color: theme.palette.secondary.dark,
  },
}));

const MeetingDisplayItem: React.FC<Props> = ({ meeting, onEdit }) => {
  const classes = useStyles();

  const { meetingDate, meetingTitle, checklist } = meeting;

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
          <Typography variant="subtitle2" className={classes.meetingDate}>
            {format(new Date(meetingDate), "dd 'de' MMM, yyyy")}
          </Typography>
        </div>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Content>
    </Card>
  );
};

export default MeetingDisplayItem;
