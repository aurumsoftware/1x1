import { createSelector } from 'reselect';

const authSelector = (state: any) => state.auth || {};

export const getUserInfo = createSelector([authSelector], auth => auth.user ?? {});
export const getAccessToken = createSelector([authSelector], auth => auth.token);
