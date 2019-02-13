import axios from '../utils/axios';

const tokenKey = 'accessToken';
const tokenHeaderKey = 'tokenHeader';

export default class AuthService {
  static saveToken(token: string, header: string): void {
    localStorage.setItem(tokenKey, token);
    localStorage.setItem(tokenHeaderKey, header);
    axios.defaults.headers.common[header] = token;
  }

  static removeToken(): void {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(tokenHeaderKey);
  }
};
