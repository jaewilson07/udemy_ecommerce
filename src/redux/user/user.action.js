import { USER } from '../constants';

export const setCurrentUser = (user) => ({
  type: USER.SET_CURRENT_USER,
  payload: user,
});