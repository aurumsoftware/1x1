import React from 'react';
import { Container, Title } from './styles';
import Avatar from '../../../components/Avatar';
import { Typography, makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { User } from '../../../../types';

interface Props {
  user: User;
  count: number;
  onClickCreateAction: () => void;
}

const useStyles = makeStyles(theme => ({
  meetingsNumber: {
    color: theme.palette.secondary.dark,
  },
}));

const MeetingHeader: React.FC<Props> = ({ user, count, onClickCreateAction }) => {
  const classes = useStyles();

  return (
    <Container>
      <Title>
        <Avatar src={user.imageUrl} />
        <div>
          <Typography variant="subtitle1" color="secondary">
            {`1 x 1 com ${user.name}`}
          </Typography>
          <Typography variant="h6" className={classes.meetingsNumber}>
            {count === 0 ? 'Nenhuma conversa' : `${count} conversa${count <= 1 ? '' : 's'}`}
          </Typography>
        </div>
      </Title>
      <Fab size="medium" color="primary" aria-label="add" onClick={onClickCreateAction}>
        <AddIcon fontSize="large" />
      </Fab>
    </Container>
  );
};

export default MeetingHeader;
