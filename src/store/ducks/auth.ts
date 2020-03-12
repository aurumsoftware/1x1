import { User, ReduxAction } from '../../../types';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: User | {};
}

export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
};

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: {},
};

const reducer = (state: AuthState = initialState, action: ReduxAction): AuthState => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export const login = (token: string, user: User): ReduxAction => {
  return {
    type: Types.LOGIN,
    payload: {
      token,
      user,
    },
  };
};

export const logout = (): ReduxAction => {
  return {
    type: Types.LOGOUT,
  };
};

export default reducer;
