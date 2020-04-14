import { User } from './../../types.d';
import api from './api';

const USERS_BASE_URL = '/users';

const authenticate = (user: User): Promise<User> => api.post(USERS_BASE_URL, user).then(({ data }) => data);

export default {
  authenticate,
};
