import axios from '../utils/axios';
import { AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
// import { router } from '../router';
import { AuthResponse } from './interfaces';

axios.defaults.headers.common['X-RANDOMIZE-TOKEN'] = localStorage.getItem('token');

function saveToken(header: string, token: string): void {
  localStorage.setItem('token', token);
  localStorage.setItem('header', header);
  axios.defaults.headers.common[header] = token;
}

export function authenticate(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
  return axios
    .post('/api/auth', {
      username,
      password
    })
    .then((response: AxiosResponse<AuthResponse>) => {
      saveToken(response.data.header, response.data.token);
      return response;
    });
}

export function logout(): AxiosPromise<any> {
  return axios.get('/api/logout');
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers.common['X-RANDOMIZE-TOKEN'] = localStorage.getItem('token');
    return config;
  },
  (error: any): any => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: any): any => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('header');
      // router.replace('/login', () => {
      //   location.reload();
      // });
    }
    return Promise.reject(error);
  }
);
