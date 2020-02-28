import React, { ReactElement } from 'react';
import Card from '../../../../components/Card';
import { Typography, IconButton, makeStyles } from '@material-ui/core';
import { Content, Header } from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '../../../../components/Chip/Chip';
import { Meeting, Task } from '../../../../../types';
import { format } from 'date-fns';

interface Props {
  meeting: Meeting;
}

const useStyles = makeStyles(theme => ({
  meetingDate: {
    color: theme.palette.secondary.dark,
  },
}));

const MeetingItem: React.FC<Props> = ({ meeting }) => {
  const classes = useStyles();

  const { meetingDate, meetingTitle, checklist } = meeting;

  const countDoneTasks = (acc: number, item: Task): number => (item.checked ? acc + 1 : acc);

  const doneCount = checklist.reduce(countDoneTasks, 0);

  return (
    <Card onClick={(): void => console.log('BATATA')}>
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

export default MeetingItem;
