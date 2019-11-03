import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import auth, { initialState as authState } from './auth/reducer';
import { ApplicationState } from './types';

const rootReducer = combineReducers<ApplicationState>({
  auth,
});

export const initialState: ApplicationState = {
  auth: authState,
};

const store = createStore(rootReducer);

export default store;
