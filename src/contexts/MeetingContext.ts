import { createContext } from 'react';
import { Meeting } from '../../types';

export interface MeetingContextData {
  meetings: Meeting[];
  isCreating: boolean;
}

export interface MeetingContextActions {
  updateMeetings: (meeting: Meeting[]) => void;
  showNewMeetingForm: () => void;
}

export interface MeetingContextValue {
  data: MeetingContextData;
  actions: MeetingContextActions;
}

const MeetingContext = createContext<Partial<MeetingContextValue>>({});

export const MeetingProvider = MeetingContext.Provider;
export const MeetingConsumer = MeetingContext.Consumer;
export default MeetingContext;
