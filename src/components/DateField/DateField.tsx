import React, { ReactElement } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { format } from 'date-fns';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import { Container } from './styles';
import DatePicker from 'react-datepicker';

interface Props {
  date: Date;
  onChange?: (date: Date) => void;
}

interface PickerProps {
  onClick?: () => void;
}

const DateField: React.FC<Props> = ({ date, onChange }) => {
  const CustomPicker = (props: PickerProps): ReactElement => (
    <IconButton onClick={props.onClick} aria-label="date" size="small" disableFocusRipple>
      <CalendarIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Container>
      <Typography variant="subtitle2" color="textSecondary">
        {format(date, "dd 'de' MMM, yyyy")}
      </Typography>
      {!!onChange && <DatePicker selected={date} onChange={onChange} customInput={<CustomPicker />}></DatePicker>}
    </Container>
  );
};

export default DateField;
