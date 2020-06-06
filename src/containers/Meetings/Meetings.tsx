import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Meeting } from '../../../types';
import Loading from '../../components/Loading';
import meetingService from '../../services/meetingService';
import { getUserInfo } from '../../store/selectors/authSelectors';
import { getActiveMeetingUser } from '../../store/selectors/meetingSelectors';
import MeetingHeader from './MeetingHeader';
import MeetingList from './MeetingList';
import MeetingEditItem from './MeetingList/MeetingItem/MeetingEditItem';

const Meetings: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const loggedUser = useSelector(getUserInfo);
  const activeMeetingUser = useSelector(getActiveMeetingUser);

  const fetchMeetings = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const meetings = await meetingService.list(loggedUser._id, activeMeetingUser._id);
      setMeetings(meetings);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = (): void => {
    setIsCreating(true);
  };

  const handleFormCancel = (): void => {
    setIsCreating(false);
  };

  console.log('isCreating', isCreating);

  useEffect(() => {
    fetchMeetings();
  }, [activeMeetingUser._id]);

  return (
    <>
      <MeetingHeader user={activeMeetingUser} count={meetings.length} onClickCreateAction={handleCreate} />
      {isCreating && <MeetingEditItem onCancel={handleFormCancel} />}
      {isLoading ? <Loading /> : <MeetingList meetings={meetings} />}
    </>
  );
};

export default Meetings;
