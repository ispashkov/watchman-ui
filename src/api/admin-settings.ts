import axios from "../utils/axios";
import { AxiosPromise } from 'axios';

export interface SyncData {
  getDataInSec: number;
  traficAmount: number;
  isGetPCData: boolean;
  isGetPCLodingData: boolean;
  daysStoreData: number;
}

export interface VersionInfo {
  WorkServiceVer: string;
  PluginVer: string;
  startDate: number;
  WorkServiceSpread: Spread[];
  PluginSpread: Spread[];
}

interface Spread {
  version: string;
  count: number;

}

export interface VersionChangelog {
  name: string;
  version: string;
  date: number;
  user: string;
}

export function getAdmin(): AxiosPromise<SyncData> {
  return axios.get('/api/admin');
}

export function getHistparam(): AxiosPromise<SyncData> {
  return axios.get('/api/admin/histparam');
}

export function getHistplugin(): AxiosPromise<SyncData> {
  return axios.get('/api/admin/histplugin');
} 

export function updateParams(params: any): AxiosPromise<any> {
  return axios.post('/api/admin/paramupdate', params);
}


// export function getBlindingById(id) {
//   return axios.get(`${url}/api/iRandomizer/api/blindingType/${id}`);
// }

// export function getBlindingByTrialId(trialId) {
//   return axios.get(`${url}/api/iRandomizer/api/trial/${trialId}/blinding`);
// }

// export function createBlinding(trialId, bodyObject) {
//   const blindingObject = new Blinding(bodyObject);
//   return axios.post(`${url}/api/iRandomizer/api/trial/${trialId}/blinding`, blindingObject);
// }

// export function updateBlinding(trialId, bodyObject) {
//   const blindingObject = new Blinding(bodyObject);
//   return axios.put(`${url}/api/iRandomizer/api/trial/${trialId}/blinding`, blindingObject);
// }

// class Blinding {
//   constructor(_blinding) {
//     if (typeof _blinding.blindingType === 'number') {
//       this.blindingType = { id: _blinding.blindingType };
//     }
//     if (_blinding.tableSize) {
//       this.tableSize = _blinding.tableSize;
//     }
//     if (_blinding.codePrefix) {
//       this.codePrefix = _blinding.codePrefix;
//     }
//     if (_blinding.siteSpecificBlindingTables) {
//       this.siteSpecificBlindingTables = _blinding.siteSpecificBlindingTables;
//     }
//     if (_blinding.sequentialTreatmentCodeSelection) {
//       this.sequentialTreatmentCodeSelection = _blinding.sequentialTreatmentCodeSelection;
//     }
//     if (_blinding.allowReuseOfTreatmentCodes) {
//       this.allowReuseOfTreatmentCodes = _blinding.allowReuseOfTreatmentCodes;
//     }
//   }
// }
