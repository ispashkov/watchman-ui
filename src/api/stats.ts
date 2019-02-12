import axios from '../utils/axios';
import { AxiosPromise } from 'axios';
import { Stat } from './interfaces';

interface StatsResponse {
    count?: any;
    average?: any;
    deviation?: any;
    perSla?: any;
    filial?: any;
    region?: any;
    tp?: any;
    computer_type?: any;
    processor?: any;
    core_count?: any;
    ram_size?: any;
    connection_type?: any;
    monitor_resolution?: any;
}

interface StatsParams {
  lastDays?: number;
  operation_name?: string;
  filial?: boolean;
  start?: string;
  end?: string;
  region?: boolean;
  tp?: boolean;
  processor?: boolean;
  core_count?: boolean;
  ram_size?: boolean;
  display_res?: boolean;
  conn_type?: boolean;
  pc_type?: boolean;
}

export function getStats(params: StatsParams): AxiosPromise<Stat[]> {
  return axios.get('/api/stat', {
    params
  });
}
