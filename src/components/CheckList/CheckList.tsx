import React, { ReactElement } from 'react';
import { Task } from '../../../types';
import CheckListItem from './CheckListItem';

interface Props {
  values?: Task[];
  onChange: (index: number, task: Task) => void;
  onRemove: (index: number) => void;
}

const CheckList: React.FC<Props> = ({ values = [], onChange, onRemove }) => {
  const mapItem = (item: Task, index: number): ReactElement => {
    return <CheckListItem task={item} index={index} onChange={onChange} onRemove={onRemove} />;
  };

  return <>{values.map(mapItem)}</>;
};

export default CheckList;
