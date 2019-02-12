export interface AuthResponse {
  header: string;
  token: string;
  user: User;
}

export interface User {
  login?: string;
  last_name?: string;
  middle_name?: string;
  name?: string;
  password?: string;
  role_name?: string;
}

export interface Operation {
  application_name?: string;
  operation_name?: string;
  target_sla?: number;
  mark?: boolean;
  count?: number;
  average?: number;
  deviation?: number;
}

export interface Main {
  pc_online?: number;
  operation_sla?: number;
  mark_operation_sla?: number;
  operations?: Operation[];
  days_from?: 300;
}

export interface Region {
  region_code: string;
  region: string;
}

export interface Filial {
  filial_code: string;
  filial_name: string;
}

export interface Tp {
  tp_code: string;
  tp_name: string;
}

export interface Stat {
  application_name: string;
  average: number;
  avgClientTime: number;
  avgServerTime: number;
  count: number;
  deviation: number;
  maxClientTime: number;
  maxServerTime: number;
  maxSla: number;
  minClientTime: number;
  minServerTime: number;
  minSla: number;
  operation_name: string;
  perSla: number;
  target_sla: number;
}
