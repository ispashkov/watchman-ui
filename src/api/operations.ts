import axios from '../utils/axios';
import { AxiosPromise } from 'axios';

export interface Operation {
  id?: number;
  app?: string;
  operation?: string;
  url?: string;
  targetSLA?: number;
  status?: boolean;
  homepage?: boolean;
}

export interface OperationFull {
  active?: boolean;
  app_business_name?: any;
  app_url?: any;
  application_name?: any;
  browser_link?: any;
  date_from?: any;
  date_to?: any;
  filialList?: any[];
  id?: string;
  mark?: boolean;
  operation_name?: string;
  organization?: any;
  process_name?: any;
  regionList?: any[];
  start_cond?: any;
  start_events_count?: any;
  start_monitor?: string;
  start_regexp?: string;
  start_subtype?: string;
  start_type?: string;
  stop_cond?: any;
  stop_events_count?: any;
  stop_monitor?: any;
  stop_regexp?: any;
  stop_subtype?: any;
  stop_type?: any;
  target_sla?: any;
  tpList?: any[];
  version?: number;
}

export function getOperations(): AxiosPromise<Operation[]> {
  return axios.get('api/operations');
}

export function getOperation(id: string): AxiosPromise<OperationFull> {
  return axios.get('/api/operation', { params: {id: id}});
}

export function saveOperation(opearationBody: OperationFull): AxiosPromise<OperationFull> {
  return axios.post('/api/operation', opearationBody);
}

export function deleteOperation(operationId: string): AxiosPromise<any> {
  return axios.delete('/api/operation', { data: { id: operationId } });
}
