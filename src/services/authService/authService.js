import { LOCAL_STORAGE } from '../../config/constants';
import localStorage from '../localStorage/localStorage';

export default {
  isAuthenticated: () => {
    return !!localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
  },
  setAuthToken: (token) => {
    localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, token);
  },
  clearToken: () => {
    localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
  },
  getAuthToken: () => {
    return localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
  }
};
