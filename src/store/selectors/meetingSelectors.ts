import { createSelector } from 'reselect';

const meetingSelector = (state: any): any => state.meeting || {};

export const getActiveMeetingUser = createSelector([meetingSelector], meeting => meeting.activeUser ?? {});
export const getActiveMeetingUserId = createSelector([meetingSelector], meeting => (meeting.activeUser ?? {})._id);
