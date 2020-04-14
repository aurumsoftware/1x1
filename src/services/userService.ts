import { User } from '../../types';
import api from './api';

const USERS_BASE_URL = '/users';

const authenticate = (user: User): Promise<User> => api.post(USERS_BASE_URL, user).then(({ data }) => data);
const all = (): Promise<User[]> => api.get(USERS_BASE_URL).then(({ data }) => data);

export default {
  authenticate,
  all,
};
