import authService from '../authService/authService';
import getFBApi from './getFacebookApi';

const LOGIN_STATUS = {
  CONNECTED: 'connected',
  UNAUTHORISED: 'not_authorized',
  UNKNOWN: 'unknown'
};

export default {
  isLoggedIn: () => {
    return new Promise((resolve, reject) => {
      getFBApi().then(fb => {
        fb.getLoginStatus(function (response) {
          const isLoggedIn = response.status === LOGIN_STATUS.CONNECTED;
          if (!isLoggedIn) {
            authService.clearToken();
          }
          resolve(isLoggedIn);
        });
      })
    });
  },
  login: () => {
    return new Promise((resolve, reject) => {
      getFBApi().then(fb => {
        fb.login(function (response) {
          authService.setAuthToken(response.authResponse.accessToken);
          resolve(response);
        }, { scope: 'user_posts' });
      });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      getFBApi().then(fb => {
        fb.getLoginStatus(function (response) {
          authService.clearToken();
          if (response.status !== LOGIN_STATUS.CONNECTED) {
            return resolve();
          }
          fb.logout(function () {
            resolve();
          });
        });
      });
    });
  },
  getFeed: () => {
    return new Promise((resolve, reject) => {
      getFBApi().then(fb => {
        fb.api('me/feed', {
          access_token: authService.getAuthToken(),
          fields: 'full_picture,created_time,story,message',
          limit: 100
        }, function (response) {
          resolve(response);
        });
      });
    });
  },
  getPost: (postId) => {
    return new Promise((resolve, reject) => {
      getFBApi().then(fb => {
        FB.api(postId, {
          access_token: authService.getAuthToken(),
          fields: 'full_picture'
        }, function (response) {
          resolve(response);
        });
      });
    });
  }
};
