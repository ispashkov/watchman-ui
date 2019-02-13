import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { AppState } from '../interfaces'
import auth from './auth';

export default (history: History) => combineReducers<AppState>({
  router: connectRouter(history),
  auth,
});
