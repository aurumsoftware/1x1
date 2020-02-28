import api from './api';
import { Meeting } from '../../types';

const MEETINGS = '/meetings';

const createMeeting = (meeting: Meeting): Promise<Response> => api.post(MEETINGS, meeting);

const updateMeeting = (meeting: Meeting, id: string): Promise<Response> => api.put(`${MEETINGS}/${id}`, meeting);

const listMeetings = (userId: string): Promise<Response> => api.get(`${MEETINGS}/${userId}`);

const removeMeeting = (id: string): Promise<Response> => api.delete(`${MEETINGS}/${id}`);

export default { createMeeting, updateMeeting, listMeetings, removeMeeting };
