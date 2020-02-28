import api from './api';
import { Meeting } from '../../types';

const createMeeting = (meeting: Meeting): Promise<Response> => api.post('/meetings', meeting);

const updateMeeting = (meeting: Meeting, id: string): Promise<Response> => api.put(`/meetings/${id}`, meeting);

const listMeetings = (userId: string): Promise<Response> => api.get(`/meetings/${userId}`);

const removeMeeting = (id: string): Promise<Response> => api.delete(`/meetings/${id}`);

export default { createMeeting, updateMeeting, listMeetings, removeMeeting };
