import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Meeting } from '../../../../../../types';
import Card from '../../../../../components/Card';
import DateField from '../../../../../components/DateField';
import RichText from '../../../../../components/RichText';
import TextInput from '../../../../../components/TextInput';
import { Actions, Divider } from './styles';
import FormActionHeader from '../../../../../components/FormActionHeader';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AddBox from '@material-ui/icons/AddBox';

interface Props {
  meeting?: Meeting;
  onCancel: () => void;
}

const MeetingEditItem: React.FC<Props> = ({ meeting, onCancel }) => {
  const [showingPrivateNotes, setShowingPrivateNotes] = useState<boolean>(false);
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

  const handleChangeDescription = (value: string): void => {
    setFieldValue('description', value);
  };

  const handleTogglePrivateNotes = (): void => {
    setShowingPrivateNotes(!showingPrivateNotes);
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
        <RichText value={values.description} onChange={handleChangeDescription}></RichText>
        <Divider />
        <FormActionHeader title="Lista de atividades" onClick={handleTogglePrivateNotes} actionIcon={<AddBox />} />
        <Divider />
        <FormActionHeader
          title="Notas privadas"
          onClick={handleTogglePrivateNotes}
          actionIcon={showingPrivateNotes ? <VisibilityOff /> : <Visibility />}
        />
        {showingPrivateNotes ? <div>showing</div> : <div>notShowing</div>}
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
