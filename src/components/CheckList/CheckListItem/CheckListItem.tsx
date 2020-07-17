import React, { ChangeEvent } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckedIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ItemContainer, FieldContainer } from './styles';
import { Task } from '../../../../types';
import TextInput from '../../TextInput';

interface Props {
  task: Task;
  index: number;
  onChange: (index: number, task: Task) => void;
  onRemove: (index: number) => void;
}

const CheckListItem: React.FC<Props> = ({ task, index, onChange, onRemove }) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    onChange(index, { ...task, checked });
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(index, { ...task, description: e.target.value });
  };

  const handleRemove = (): void => {
    onRemove(index);
  };

  return (
    <ItemContainer>
      <FieldContainer>
        <Checkbox
          icon={<UncheckedIcon />}
          checkedIcon={<CheckedIcon />}
          name="check-item"
          color="primary"
          onChange={handleCheck}
          style={{ padding: 6 }}
        />
        <TextInput
          id="meetingTitle"
          name="meetingTitle"
          fontSize="sm"
          placeholder="Digite o título"
          value={task.description}
          onChange={handleChangeDescription}
        />
      </FieldContainer>

      <IconButton color="primary" aria-label="delete" style={{ padding: 6 }} onClick={handleRemove}>
        <DeleteOutlineIcon />
      </IconButton>
    </ItemContainer>
  );
};

export default CheckListItem;
