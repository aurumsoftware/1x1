export interface User {
  login: string;
  score: number;
  id: string;
}

export interface Task {
  description: string;
  checked: boolean;
}

export interface Meeting {
  _id: string;
  checklist: Task[];
  meetingTitle: string;
  meetingDate: string;
  description: string;
  userId1: string;
  userId2: string;
  createdAt: string;
  updatedAt: string;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Color = 'primary' | 'secondary';
