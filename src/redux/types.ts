import { Actions as AuthActions } from './auth/actions';
import { State as AuthState } from './auth/reducer';

export type Actions = AuthActions;

export interface ApplicationState {
  auth: AuthState;
}
