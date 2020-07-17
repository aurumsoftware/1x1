import React, { ReactElement } from 'react';
import { Container } from './styles';
import { Typography, IconButton } from '@material-ui/core';

interface Props {
  title: string;
  onClick: () => void;
  actionIcon: ReactElement;
}

const FormActionHeader: React.FC<Props> = ({ title, actionIcon, onClick }) => {
  return (
    <Container>
      <Typography color="textSecondary" variant="h5">
        {title}
      </Typography>
      <IconButton onClick={onClick} aria-label="date" size="small" disableFocusRipple>
        {actionIcon}
      </IconButton>
    </Container>
  );
};

export default FormActionHeader;
