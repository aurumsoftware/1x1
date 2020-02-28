import React, { useState } from 'react';
import { Meeting } from '../../../../../types';
import MeetingDisplayItem from './MeetingDisplayItem';
import MeetingEditItem from './MeetingEditItem';

interface Props {
  meeting: Meeting;
  editing?: boolean;
}

const MeetingItem: React.FC<Props> = ({ meeting, editing = false }) => {
  const [isEditing, setIsEditing] = useState<boolean>(editing);

  const handleToggleIsEditing = (): void => setIsEditing(!isEditing);

  return isEditing ? <MeetingEditItem /> : <MeetingDisplayItem meeting={meeting} onEdit={handleToggleIsEditing} />;
};

export default MeetingItem;
