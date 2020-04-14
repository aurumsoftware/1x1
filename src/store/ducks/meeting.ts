import { User, ReduxAction } from '../../../types';

interface MeetingState {
  activeUser: User | null;
}

export const Types = {
  SET_ACTIVE_MEETING: 'meeting/SET_ACTIVE',
};

const initialState: MeetingState = {
  activeUser: null,
};

const reducer = (state: MeetingState = initialState, action: ReduxAction): MeetingState => {
  switch (action.type) {
    case Types.SET_ACTIVE_MEETING:
      return {
        activeUser: action.payload,
      };
    default:
      return state;
  }
};

export const setActiveMeeting = (activeUser: User): ReduxAction => {
  return {
    type: Types.SET_ACTIVE_MEETING,
    payload: activeUser,
  };
};

export default reducer;
