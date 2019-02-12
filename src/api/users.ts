import axios from '../utils/axios';
import { AxiosPromise } from 'axios';
import { User } from './interfaces';

export function getUsers(): AxiosPromise<User[]> {
  return axios.get('/api/users');
}

export function addUser(userRequest: User): AxiosPromise<User[]> {
  return axios.post('/api/user', userRequest);
}

export function deleteUser(userRequest: User): AxiosPromise<User[]> {
  return axios.delete('/api/user', { data: userRequest });
}
