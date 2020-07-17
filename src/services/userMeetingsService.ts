import { User } from '../../types';
import api from './api';

const USER_MEETINGS_BASE_URL = '/user_meetings';

const listMeetingUsers = (userId: string): Promise<User[]> =>
  api.get(`${USER_MEETINGS_BASE_URL}/${userId}/users`).then(({ data }) => data);

export default {
  listMeetingUsers,
};
