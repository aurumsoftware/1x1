import React from 'react';
import ResponsiveDrawer from '../../components/Drawer';
import MeetingHeader from '../Meetings/MeetingHeader';
import MeetingList from '../Meetings/MeetingList';

const Main: React.FC = () => {
  return (
    <ResponsiveDrawer toolbar={<MeetingHeader />}>
      <MeetingList />
    </ResponsiveDrawer>
  );
};

export default Main;
