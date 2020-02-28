import React from 'react';
import MeetingHeader from './MeetingHeader';
import MeetingList from './MeetingList';

interface Props {}

const Meetings: React.FC<Props> = () => {
  return (
    <>
      <MeetingHeader />
      <MeetingList />
    </>
  );
};

export default Meetings;
