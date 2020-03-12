export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface User {
  _id: string | undefined;
  googleId: string;
  email: string;
  name: string;
  imageUrl: string;
}

export interface Task {
  description: string;
  checked: boolean;
}

export interface Meeting {
  _id: string | undefined;
  checklist?: Task[];
  meetingTitle: string;
  meetingDate: string | Date;
  description: string;
  userId1: string;
  userId2: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface PrivateNote {
  _id: string;
  meetingId: string;
  userId: string;
  description: string;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Color = 'primary' | 'secondary';
