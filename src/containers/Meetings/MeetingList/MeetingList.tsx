import React, { useState, ReactElement, useEffect } from 'react';
import MeetingItem from './MeetingItem';
import { Meeting } from '../../../../types';
import meetingService from '../../../services/meetingService';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../store/selectors/authSelectors';
import { getActiveMeetingUser } from '../../../store/selectors/meetingSelectors';
import MeetingHeader from '../MeetingHeader';
import Loading from '../../../components/Loading';

const MeetingList: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  useEffect(() => {
    fetchMeetings();
  }, [activeMeetingUser._id]);

  const mapMeeting = (meeting: Meeting): ReactElement => <MeetingItem meeting={meeting} key={meeting._id} />;

  return (
    <>
      <MeetingHeader user={activeMeetingUser} count={meetings.length} />
      {isLoading ? <Loading /> : meetings.map(mapMeeting)}
    </>
  );
};

export default MeetingList;
