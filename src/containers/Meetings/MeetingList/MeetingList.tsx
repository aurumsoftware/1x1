import React, { ReactElement } from 'react';
import { Meeting } from '../../../../types';
import MeetingItem from './MeetingItem';
import EmptyState from './EmptyState';

interface Props {
  meetings: Meeting[];
  onAdd: () => void;
  showEmptyState?: boolean;
}

const MeetingList: React.FC<Props> = ({ meetings, onAdd, showEmptyState = true }) => {
  const mapMeeting = (meeting: Meeting): ReactElement => <MeetingItem meeting={meeting} key={meeting._id} />;
  const emptyState = showEmptyState ? <EmptyState onClickAdd={onAdd} /> : <></>;

  return <>{meetings.length ? meetings.map(mapMeeting) : emptyState} </>;
};

export default MeetingList;
