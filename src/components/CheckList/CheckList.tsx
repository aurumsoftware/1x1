import React, { ReactElement, ChangeEvent } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckedIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { CheckListItem, FieldContainer } from './styles';
import { Task } from '../../../types';
import TextInput from '../TextInput';

interface Props {
  values?: Task[];
  onChange: (index: number, task: Task) => void;
  onRemove: (index: number) => void;
}

const CheckList: React.FC<Props> = ({ values = [], onChange, onRemove }) => {
  const mapItem = (item: Task, index: number): ReactElement => {
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
      onChange(index, { ...item, checked });
    };

    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(index, { ...item, description: e.target.value });
    };

    const handleRemove = (): void => {
      onRemove(index);
    };

    return (
      <CheckListItem>
        <FieldContainer>
          <Checkbox
            icon={<UncheckedIcon />}
            checkedIcon={<CheckedIcon />}
            name="check-item"
            color="primary"
            onChange={handleCheck}
          />
          <TextInput
            id="meetingTitle"
            name="meetingTitle"
            fontSize="sm"
            placeholder="Digite o título"
            value={item.description}
            onChange={handleChangeDescription}
          />
        </FieldContainer>

        <IconButton color="primary" aria-label="delete" onClick={handleRemove}>
          <DeleteOutlineIcon />
        </IconButton>
      </CheckListItem>
    );
  };

  return <>{values.map(mapItem)}</>;
};

export default CheckList;
