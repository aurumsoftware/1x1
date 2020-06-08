import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { Meeting } from '../../../../../../types';
import Card from '../../../../../components/Card';
import DateField from '../../../../../components/DateField';
import TextInput from '../../../../../components/TextInput';
import { Actions, Divider } from './styles';

interface Props {
  meeting?: Meeting;
  onCancel: () => void;
}

const MeetingEditItem: React.FC<Props> = ({ meeting, onCancel }) => {
  const buildInitialValues = (): Meeting =>
    meeting || {
      _id: undefined,
      description: '',
      meetingTitle: '',
      meetingDate: new Date(),
      userId1: '1',
      userId2: '2',
    };

  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    initialValues: buildInitialValues(),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChangeDate = (date: Date): void => {
    setFieldValue('meetingDate', date);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="meetingTitle"
          name="meetingTitle"
          type="text"
          placeholder="Digite o título"
          onChange={handleChange}
          value={values.meetingTitle}
        />
        <DateField date={new Date(values.meetingDate)} onChange={handleChangeDate} />
        <Divider />
        <Actions>
          <Button color="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Salvar
          </Button>
        </Actions>
      </form>
    </Card>
  );
};

export default MeetingEditItem;
