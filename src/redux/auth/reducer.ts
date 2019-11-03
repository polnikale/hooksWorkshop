import { Reducer } from 'redux';
import User from '../../types/User';
import { Actions, SetUser } from './actions';

export interface State {
  user?: User;
}

export const initialState: State = {
  user: undefined,
};

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case SetUser:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
