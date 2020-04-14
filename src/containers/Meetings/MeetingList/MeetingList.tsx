import React, { ReactElement } from 'react';
import { Meeting } from '../../../../types';
import MeetingItem from './MeetingItem';

interface Props {
  meetings: Meeting[];
}

const MeetingList: React.FC<Props> = ({ meetings }) => {
  const mapMeeting = (meeting: Meeting): ReactElement => <MeetingItem meeting={meeting} key={meeting._id} />;

  return <>{meetings.map(mapMeeting)}</>;
};

export default MeetingList;
