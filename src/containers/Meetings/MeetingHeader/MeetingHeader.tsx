import React from 'react';
import { Container, Title } from './styles';
import Avatar from '../../../components/Avatar';
import { Typography, makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface Props {}

const useStyles = makeStyles(theme => ({
  meetingsNumber: {
    color: theme.palette.secondary.dark,
  },
}));

const MeetingHeader: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Container>
      <Title>
        <Avatar src={`https://robohash.org/oicramps`} />
        <div>
          <Typography variant="subtitle1" color="secondary">
            1 x 1 com Ronaldo
          </Typography>
          <Typography variant="subtitle2" className={classes.meetingsNumber}>
            5 conversas
          </Typography>
        </div>
      </Title>
      <Fab size="medium" color="primary" aria-label="add">
        <AddIcon fontSize="large" />
      </Fab>
    </Container>
  );
};

export default MeetingHeader;
