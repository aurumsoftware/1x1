import React, { ReactElement } from 'react';
import { Meeting } from '../../../../types';
import MeetingItem from './MeetingItem';
import EmptyState from './EmptyState';

interface Props {
  meetings: Meeting[];
  showEmptyState?: boolean;
}

const MeetingList: React.FC<Props> = ({ meetings, showEmptyState = true }) => {
  const mapMeeting = (meeting: Meeting): ReactElement => <MeetingItem meeting={meeting} key={meeting._id} />;
  const emptyState = showEmptyState ? <EmptyState /> : <></>;

  return <>{meetings.length ? meetings.map(mapMeeting) : emptyState} </>;
};

export default MeetingList;
