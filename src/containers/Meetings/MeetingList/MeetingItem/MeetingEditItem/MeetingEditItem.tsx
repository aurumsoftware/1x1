import React from 'react';
import { Paper } from '@material-ui/core';
import Card from '../../../../../components/Card';
import { Meeting } from '../../../../../../types';

interface Props {
  meeting?: Meeting;
}

const MeetingEditItem: React.FC<Props> = ({ meeting }) => {
  return (
    <Card>
      <input type="text" placeholder="Digite o título"></input>
    </Card>
  );
};

export default MeetingEditItem;
