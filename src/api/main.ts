import axios from '../utils/axios';
import { AxiosPromise } from 'axios';
import { Main } from './interfaces';

export function getMainInfo(days: number): AxiosPromise<Main> {
  return axios.get('/api/main', {
    params: {
      lastDays: days
    }
  });
}
