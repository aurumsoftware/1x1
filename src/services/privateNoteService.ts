import api from './api';
import { PrivateNote } from '../../types';

const createPrivateNote = (privateNote: PrivateNote): Promise<Response> => api.post('/private_notes', privateNote);

const updatePrivateNote = (privateNote: PrivateNote, id: string): Promise<Response> =>
  api.put(`private_notes/${id}`, privateNote);

const listPrivateNotes = (userId: string): Promise<Response> => api.get(`/private_notes/${userId}`);

const listPrivateNotesByMeeting = (userId: string, meetingId: string): Promise<Response> =>
  api.get(`/private_notes/${userId}/meeting/${meetingId}`);

const removePrivateNote = (id: string): Promise<Response> => api.delete(`/private_notes/${id}`);

export default {
  createPrivateNote,
  updatePrivateNote,
  listPrivateNotes,
  listPrivateNotesByMeeting,
  removePrivateNote,
};
