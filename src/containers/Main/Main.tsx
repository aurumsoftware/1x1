import React from 'react';
import Drawer from '../../components/Drawer';
import MeetingHeader from '../Meetings/MeetingHeader';
import MeetingList from '../Meetings/MeetingList';

const Main: React.FC = () => {
  return (
    <Drawer toolbar={<MeetingHeader />}>
      <MeetingList />
    </Drawer>
  );
};

export default Main;
