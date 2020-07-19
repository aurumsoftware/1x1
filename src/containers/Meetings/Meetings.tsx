import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Meeting } from '../../../types';
import Loading from '../../components/Loading';
import meetingService from '../../services/meetingService';
import { getUserInfo } from '../../store/selectors/authSelectors';
import { getActiveMeetingUser } from '../../store/selectors/meetingSelectors';
import MeetingHeader from './MeetingHeader';
import MeetingList from './MeetingList';
import MeetingEditItem from './MeetingList/MeetingItem/MeetingEditItem';
import { MeetingProvider, MeetingContextValue } from '../../contexts/MeetingContext';
import EmptyState from './MeetingList/EmptyState';
import { EmptyStateContainer } from './styles';

const Meetings: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const loggedUser = useSelector(getUserInfo);
  const activeMeetingUser = useSelector(getActiveMeetingUser);

  const fetchMeetings = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      const meetings = await meetingService.list(loggedUser._id, activeMeetingUser._id);
      setMeetings(meetings);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [activeMeetingUser._id, loggedUser._id]);

  const showNewMeetingForm = (): void => {
    setIsCreating(true);
  };

  const handleFormCancel = (): void => {
    setIsCreating(false);
  };

  const updateMeetings = (newMeetingList: Meeting[]): void => {
    setMeetings(newMeetingList);
  };

  useEffect(() => {
    fetchMeetings();
  }, [activeMeetingUser._id, fetchMeetings]);

  const context: MeetingContextValue = {
    data: { meetings, isCreating },
    actions: { updateMeetings, showNewMeetingForm },
  };

  const meetingContent = (
    <>
      <MeetingHeader user={activeMeetingUser} count={meetings.length} onClickCreateAction={showNewMeetingForm} />
      {isCreating && <MeetingEditItem onCancel={handleFormCancel} />}
      {isLoading ? <Loading /> : <MeetingList meetings={meetings} showEmptyState={!isCreating} />}
    </>
  );

  return (
    <MeetingProvider value={context}>
      {activeMeetingUser._id ? (
        meetingContent
      ) : (
        <EmptyStateContainer>
          <EmptyState noMeetings />
        </EmptyStateContainer>
      )}
    </MeetingProvider>
  );
};

export default Meetings;
