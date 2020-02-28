import api from './api';
import { PrivateNote } from '../../types';

const PRIVATE_NOTES = '/private_notes';

const createPrivateNote = (privateNote: PrivateNote): Promise<Response> => api.post(PRIVATE_NOTES, privateNote);

const updatePrivateNote = (privateNote: PrivateNote, id: string): Promise<Response> =>
  api.put(`${PRIVATE_NOTES}/${id}`, privateNote);

const listPrivateNotes = (userId: string): Promise<Response> => api.get(`${PRIVATE_NOTES}/${userId}`);

const listPrivateNotesByMeeting = (userId: string, meetingId: string): Promise<Response> =>
  api.get(`${PRIVATE_NOTES}/${userId}/meeting/${meetingId}`);

const removePrivateNote = (id: string): Promise<Response> => api.delete(`${PRIVATE_NOTES}/${id}`);

export default {
  createPrivateNote,
  updatePrivateNote,
  listPrivateNotes,
  listPrivateNotesByMeeting,
  removePrivateNote,
};
