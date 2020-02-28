import React, { ReactElement } from 'react';
import Card from '../../../../components/Card';
import { Typography, IconButton, makeStyles } from '@material-ui/core';
import { Content, Header } from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '../../../../components/Chip/Chip';

interface Props {}

const useStyles = makeStyles(theme => ({
  meetingDate: {
    color: theme.palette.secondary.dark,
  },
}));

function MeetingItem({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <Card>
      <Content>
        <div>
          <Header>
            <Typography variant="h6" color="secondary">
              Reunião 02
            </Typography>
            <Chip color="primary" label="2 de 4" margin />
          </Header>
          <Typography variant="subtitle2" className={classes.meetingDate}>
            12 de Abr, 2020
          </Typography>
        </div>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Content>
    </Card>
  );
}

export default MeetingItem;
