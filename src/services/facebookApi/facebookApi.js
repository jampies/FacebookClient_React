import authService from '../authService/authService';

const LOGIN_STATUS = {
  CONNECTED: 'connected',
  UNAUTHORISED: 'not_authorized',
  UNKNOWN: 'unknown'
};

export default {
  isLoggedIn: () => {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(function (response) {
        const isLoggedIn = response.status === LOGIN_STATUS.CONNECTED;
        if (!isLoggedIn) {
          authService.clearToken();
        }
        resolve(isLoggedIn);
      });
    });
  },
  login: () => {
    return new Promise((resolve, reject) => {
      FB.login(function (response) {
        authService.setAuthToken(response.authResponse.accessToken);
        resolve(response);
      }, { scope: 'user_posts' });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      FB.logout(function (response) {
        authService.clearToken();
        resolve();
      });
    });
  },
  getFeed: () => {
    return new Promise((resolve, reject) => {
      FB.api('me/feed', {
        access_token: authService.getAuthToken(),
        fields: 'full_picture,created_time,story,message'
      }, function (response) {
        resolve(response);
      });
    });
  },
  getPost: (postId) => {
    return new Promise((resolve, reject) => {
      FB.api(postId, {
        access_token: authService.getAuthToken(),
        fields: 'full_picture'
      }, function (response) {
        resolve(response);
      });
    });
  }
};
