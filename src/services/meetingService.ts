import api from './api';
import { Meeting } from '../../types';

const MEETINGS = '/meetings';

const create = (meeting: Meeting): Promise<Meeting> => api.post(MEETINGS, meeting).then(({ data }) => data);

const update = (meeting: Meeting, id: string): Promise<Meeting> =>
  api.put(`${MEETINGS}/${id}`, meeting).then(({ data }) => data);

const list = (firstUserId: string, secondUserId: string): Promise<Meeting[]> =>
  api.get(`${MEETINGS}/${firstUserId}/${secondUserId}`).then(({ data }) => data);

const remove = (id: string): Promise<Response> => api.delete(`${MEETINGS}/${id}`);

export default { create, update, list, remove };
