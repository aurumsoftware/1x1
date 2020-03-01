import React, { useMemo } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { format } from 'date-fns';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import { Container } from './styles';

interface Props {
  date: Date;
  onChange?: () => void;
}

const DateField: React.FC<Props> = ({ date, onChange }) => {
  const withPicker = useMemo((): boolean => !!onChange, [onChange]);

  return (
    <Container>
      <Typography variant="subtitle2" color="textSecondary">
        {format(date, "dd 'de' MMM, yyyy")}
      </Typography>
      {withPicker && (
        <IconButton aria-label="date" size="small" disableFocusRipple>
          <CalendarIcon fontSize="small" />
        </IconButton>
      )}
    </Container>
  );
};

export default DateField;
