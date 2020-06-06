import React, { useState } from 'react';
import { Meeting } from '../../../../../types';
import MeetingDisplayItem from './MeetingDisplayItem';
import MeetingEditItem from './MeetingEditItem';
import { Container } from './styles';

interface Props {
  meeting: Meeting;
  editing?: boolean;
}

const MeetingItem: React.FC<Props> = ({ meeting, editing = false }) => {
  const [isEditing, setIsEditing] = useState<boolean>(editing);

  const handleToggleIsEditing = (): void => setIsEditing(!isEditing);

  return (
    <Container>
      {isEditing ? (
        <MeetingEditItem meeting={meeting} onCancel={handleToggleIsEditing} />
      ) : (
        <MeetingDisplayItem meeting={meeting} onEdit={handleToggleIsEditing} />
      )}
    </Container>
  );
};

export default MeetingItem;
