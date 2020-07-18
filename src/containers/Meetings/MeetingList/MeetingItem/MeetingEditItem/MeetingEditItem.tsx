import { Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import toast from 'cogo-toast';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Meeting, Task } from '../../../../../../types';
import Card from '../../../../../components/Card';
import CheckList from '../../../../../components/CheckList';
import DateField from '../../../../../components/DateField';
import FormActionHeader from '../../../../../components/FormActionHeader';
import Loading from '../../../../../components/Loading';
import RichText from '../../../../../components/RichText';
import TextInput from '../../../../../components/TextInput';
import MeetingContext from '../../../../../contexts/MeetingContext';
import meetingService from '../../../../../services/meetingService';
import { getUserId } from '../../../../../store/selectors/authSelectors';
import { getActiveMeetingUserId } from '../../../../../store/selectors/meetingSelectors';
import { Actions, Divider } from './styles';
interface Props {
  meeting?: Meeting;
  onCancel: () => void;
}

const MeetingEditItem: React.FC<Props> = ({ meeting, onCancel }) => {
  // const [showingPrivateNotes, setShowingPrivateNotes] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userId = useSelector(getUserId);
  const otherUserId = useSelector(getActiveMeetingUserId);
  const { data, actions } = useContext(MeetingContext);
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

  const updateMeetingsList = (meeting: Meeting, isEdit: boolean): void => {
    const meetings: Meeting[] = data?.meetings || [];

    const newMeetingList = isEdit
      ? meetings.map((meetingItem: Meeting) => (meetingItem._id === meeting._id ? meeting : meetingItem))
      : [...meetings, meeting];

    actions?.updateMeetings(newMeetingList);
  };

  const handleFormSubmit = async (formValues: Meeting): Promise<void> => {
    const isEdit = !!formValues._id;
    try {
      setIsLoading(true);
      const newMeeting: Meeting = await (formValues._id
        ? meetingService.update(formValues, formValues._id)
        : meetingService.create(formValues));

      console.log('newMeeting', newMeeting);

      toast.success(`A reunião foi ${isEdit ? 'alterada' : 'criada'}!`, { position: 'bottom-left' });
      updateMeetingsList(newMeeting, isEdit);
      onCancel();
    } catch (error) {
      console.error(error);
      toast.success(`Ops! Não foi possível ${isEdit ? 'alterar' : 'criar'} a reunião. Tente novamente mais tarde`, {
        position: 'bottom-left',
      });
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

  // const handleTogglePrivateNotes = (): void => {
  //   setShowingPrivateNotes(!showingPrivateNotes);
  // };

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
