import Axios, { AxiosRequestConfig} from "axios";
import { push } from 'connected-react-router';
import store from '../store';
import { auth } from '../constants/routes';
import AuthService from '../services/Auth';

const AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  }
});

AxiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers.common['X-RANDOMIZE-TOKEN'] = localStorage.getItem('token');
    return config;
  },
  (error: any): any => {
    return Promise.reject(error);
  }
);
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  (error: any): any => {
    if (error.response && error.response.status === 401) {
      AuthService.removeToken();
      store.dispatch(push(auth.path));
    }
    return Promise.reject(error);
  }
);


export default AxiosInstance;
