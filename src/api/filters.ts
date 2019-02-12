import axios from '../utils/axios';
import { AxiosPromise } from 'axios';
import { Filial, Region, Tp } from './interfaces';

export function getFilials(): AxiosPromise<Filial[]> {
  return axios.get('/api/filials');
}

export function getRegions(filialList = [] as string[]): AxiosPromise<Region[]> {
  let getRegionUrl = '/api/regions?filial_code=';
  if (filialList.length) {
    getRegionUrl = `/api/regions?filial_code=${filialList.join('&filial_code=')}`;
  }
  return axios.get(getRegionUrl);
}

export function getTp({ regionList = [] as string[], filialList = [] as string[] } = {}): AxiosPromise<Tp[]> {
  let getTpUrl = '/api/tp?region_code=';
  if (regionList.length) {
    getTpUrl = `/api/tp?region_code=${regionList.join('&region_code=')}`;
  }
  if (filialList.length) {
    getTpUrl = `/api/tp?filial_code=${filialList.join('&filial_code=')}`;
  }
  return axios.get(getTpUrl);
}
