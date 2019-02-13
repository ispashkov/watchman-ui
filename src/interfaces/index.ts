import { RouterState } from 'connected-react-router';

export interface AuthReducer {
  isLoading: boolean,
  errors: object,
  user: null | object
}

export interface AppState {
  router: RouterState,
  auth: AuthReducer
}

export interface AuthCredentials {
  username: string,
  password: string
}
