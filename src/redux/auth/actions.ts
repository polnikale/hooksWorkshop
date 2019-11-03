import { Action } from 'redux';
import User from '../../types/User';

// SET_USER

export const SetUser = '@@auth/SET_USER';

export interface SetUserAction extends Action<typeof SetUser> {
  user: User;
}

export const setUser = (user: User): SetUserAction => ({
  type: SetUser,
  user,
});

export type Actions = SetUserAction;
