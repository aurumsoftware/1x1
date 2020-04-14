import React, { useEffect } from 'react';
import Drawer from '../../components/Drawer';
import MeetingHeader from '../Meetings/MeetingHeader';
import MeetingList from '../Meetings/MeetingList';
import { useSelector } from 'react-redux';
import { getAccessToken } from '../../selectors/authSelectors';
import { useHistory } from 'react-router-dom';

const Main: React.FC = () => {
  const history = useHistory();
  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    if (!accessToken) history.push('/login');
  }, []);

  return (
    <Drawer toolbar={<MeetingHeader />}>
      <MeetingList />
    </Drawer>
  );
};

export default Main;
