import api from './api';
import { Meeting } from '../../types';

const MEETINGS = '/meetings';

const createMeeting = (meeting: Meeting): Promise<Response> => api.post(MEETINGS, meeting).then(({ data }) => data);

const updateMeeting = (meeting: Meeting, id: string): Promise<Response> =>
  api.put(`${MEETINGS}/${id}`, meeting).then(({ data }) => data);

const listMeetings = (userId: string): Promise<Meeting[]> => api.get(`${MEETINGS}/${userId}`).then(({ data }) => data);

const removeMeeting = (id: string): Promise<Response> => api.delete(`${MEETINGS}/${id}`);

export default { createMeeting, updateMeeting, listMeetings, removeMeeting };
