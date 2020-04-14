import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Drawer from '../../components/Drawer';
import { getAccessToken } from '../../store/selectors/authSelectors';
import Meetings from '../Meetings';

const Main: React.FC = () => {
  const history = useHistory();
  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    if (!accessToken) history.push('/login');
  }, []);

  return (
    <Drawer>
      <Meetings />
    </Drawer>
  );
};

export default Main;
