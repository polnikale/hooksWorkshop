import { ApplicationState } from '../types';

export const getAuth = (state: ApplicationState) => state.auth;

export const getUser = (state: ApplicationState) => getAuth(state).user;
export const getUserLoggedIn = (state: ApplicationState) =>
  getUser(state) !== undefined;
