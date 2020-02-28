import React, { useState, ReactElement, useEffect } from 'react';
import MeetingItem from './MeetingItem';
import { Meeting } from '../../../../types';
import meetingService from '../../../services/meetingService';

const MOCKED_MEETINGS = [
  {
    checklist: [
      {
        checked: false,
        description: 'testes',
      },
      {
        checked: true,
        description: 'teste 2',
      },
    ],
    _id: '5e593967df282e1387e4b8c5',
    meetingTitle: 'oi',
    meetingDate: '2020-02-28T15:35:01.250Z',
    description: 'descricao da reuniao',
    userId1: '5e59330e64a77a11ab25dd11',
    userId2: '5e59332564a77a11ab25dd12',
    createdAt: '2020-02-28T16:01:43.932Z',
    updatedAt: '2020-02-28T16:01:43.932Z',
  },
  {
    checklist: [
      {
        checked: false,
        description: 'testes',
      },
      {
        checked: true,
        description: 'teste 2',
      },
      {
        checked: false,
        description: 'testes',
      },
      {
        checked: true,
        description: 'teste 2',
      },
    ],
    _id: '5e593967df282e1387e4b8c5',
    meetingTitle: 'oi',
    meetingDate: '2020-02-28T15:35:01.250Z',
    description: 'descricao da reuniao',
    userId1: '5e59330e64a77a11ab25dd11',
    userId2: '5e59332564a77a11ab25dd12',
    createdAt: '2020-02-28T16:01:43.932Z',
    updatedAt: '2020-02-28T16:01:43.932Z',
  },
];

interface Props {}

const MeetingList: React.FC<Props> = () => {
  const [meetings, setMeetings] = useState<Meeting[]>(MOCKED_MEETINGS);
  const fetchMeetings = async () => {
    const meeting = await meetingService.listMeetings('5e59330e64a77a11ab25dd11');
    setMeetings(meeting);
  };
  useEffect(() => {
    fetchMeetings();
  }, []);

  const mapMeeting = (meeting: Meeting): ReactElement => <MeetingItem meeting={meeting} key={meeting._id} />;

  return <>{meetings.map(mapMeeting)}</>;
};

export default MeetingList;
