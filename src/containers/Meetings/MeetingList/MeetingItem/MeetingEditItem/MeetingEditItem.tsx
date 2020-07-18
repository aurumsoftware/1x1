import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Meeting, Task } from '../../../../../../types';
import Card from '../../../../../components/Card';
import DateField from '../../../../../components/DateField';
import RichText from '../../../../../components/RichText';
import TextInput from '../../../../../components/TextInput';
import { Actions, Divider } from './styles';
import FormActionHeader from '../../../../../components/FormActionHeader';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Add from '@material-ui/icons/Add';
import CheckList from '../../../../../components/CheckList';
import Loading from '../../../../../components/Loading';
import meetingService from '../../../../../services/meetingService';
import toast from 'cogo-toast';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../../../store/selectors/authSelectors';
import { getActiveMeetingUserId } from '../../../../../store/selectors/meetingSelectors';

interface Props {
  meeting?: Meeting;
  onCancel: () => void;
}

const MeetingEditItem: React.FC<Props> = ({ meeting, onCancel }) => {
  const [showingPrivateNotes, setShowingPrivateNotes] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userId = useSelector(getUserId);
  const otherUserId = useSelector(getActiveMeetingUserId);
  const buildInitialValues = (): Meeting =>
    meeting || {
      _id: undefined,
      description: '',
      meetingTitle: '',
      meetingDate: new Date(),
      userId1: userId,
      userId2: otherUserId,
      checklist: [] as Task[],
    };

  const handleFormSubmit = async (formValues: Meeting): Promise<void> => {
    try {
      setIsLoading(true);
      await (formValues._id ? meetingService.update(formValues, formValues._id) : meetingService.create(formValues));
      toast.success(`A reunião foi ${formValues._id ? 'alterada' : 'criada'}!`, { position: 'bottom-left' });
      onCancel();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    initialValues: buildInitialValues(),
    onSubmit: handleFormSubmit,
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

  const handleAddTask = (): void => {
    setFieldValue('checklist', [...values.checklist, { checked: false, description: '' }]);
  };

  const handleUpdateTask = (index: number, task?: Task): void => {
    const newTaskList: Task[] = values.checklist;
    task ? newTaskList.splice(index, 1, task) : newTaskList.splice(index, 1);

    setFieldValue('checklist', newTaskList);
  };

  const handleRemoveTask = (index: number): void => {
    handleUpdateTask(index);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="meetingTitle"
          name="meetingTitle"
          fontSize="md"
          fontWeight="bold"
          placeholder="Digite o título"
          onChange={handleChange}
          value={values.meetingTitle}
        />
        <DateField date={new Date(values.meetingDate)} onChange={handleChangeDate} />
        <RichText value={values.description} onChange={handleChangeDescription}></RichText>
        <Divider />
        <FormActionHeader title="Lista de atividades" onClick={handleAddTask} actionIcon={<Add />} />
        <CheckList values={values?.checklist} onChange={handleUpdateTask} onRemove={handleRemoveTask} />
        {/* <Divider />
        <FormActionHeader
          title="Notas privadas"
          onClick={handleTogglePrivateNotes}
          actionIcon={showingPrivateNotes ? <VisibilityOff /> : <Visibility />}
        />
        {showingPrivateNotes ? (
          <RichText value={values.description} onChange={handleChangeDescription}></RichText>
        ) : (
          <></>
        )} */}
        <Actions>
          <Button color="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          {isLoading ? (
            <Loading size={20} noMargin />
          ) : (
            <Button type="submit" color="primary">
              Salvar
            </Button>
          )}
        </Actions>
      </form>
    </Card>
  );
};

export default MeetingEditItem;
