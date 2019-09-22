import td from 'testdouble';
import { LOGIN_STATUS } from './facebookApi';
import assert from 'assert';

const FAKE_API = {
  getLoginStatus: td.func('getLoginStatus'),
  login: td.func('login'),
  logout: td.func('logout')
};

describe('Facebook Api Service', () => {
  let facebookApi;
  let fakeAuth;

  beforeEach(() => {
    facebookApi = getComponentUnderTest({});
  });

  function getComponentUnderTest ({ status = LOGIN_STATUS.CONNECTED }) {
    td.when(FAKE_API.getLoginStatus()).thenCallback({ status });
    td.when(FAKE_API.login(td.callback, td.matchers.anything())).thenCallback(({ authResponse: { accessToken: 'AUTH123' } }));
    td.when(FAKE_API.logout(td.callback)).thenCallback();
    td.replace('./getFacebookApi', () => Promise.resolve(FAKE_API));
    fakeAuth = td.replace('../authService/authService').default;
    return require('./facebookApi').default;
  }

  afterEach(() => {
    td.reset();
  });

  describe('isLoggedIn', () => {
    it('should clear authToken if not logged in', (done) => {
      facebookApi = getComponentUnderTest({ status: LOGIN_STATUS.UNKNOWN });
      facebookApi.isLoggedIn().then(response => {
        td.verify(fakeAuth.clearToken());
        done();
      });
    });

    it('should resolve true when status === "connected"', (done) => {
      facebookApi = getComponentUnderTest({ status: LOGIN_STATUS.CONNECTED });
      facebookApi.isLoggedIn().then(response => {
        assert(response);
        done();
      });
    });

    it('should resolve false when status !== "connected"', (done) => {
      facebookApi = getComponentUnderTest({ status: LOGIN_STATUS.UNKNOWN });
      facebookApi.isLoggedIn().then(response => {
        assert(!response);
        done();
      });
    });
  });

  describe('login', () => {
    it('should set auth token', (done) => {
      facebookApi.login().then(() => {
        td.verify(fakeAuth.setAuthToken('AUTH123'));
        done();
      });
    });
  });

  describe('logout', () => {
    it('should clear authtoken', (done) => {
      facebookApi.logout().then(() => {
        td.verify(fakeAuth.clearToken());
        done();
      });
    });

    it('should resolve and not call api logout if already logged out', (done) => {
      facebookApi = getComponentUnderTest({ status: LOGIN_STATUS.UNKNOWN });
      facebookApi.logout().then(() => {
        td.verify(FAKE_API.logout(), { times: 0 });
        done();
      });
    });

    it('should call api logout and resolve if logged in', (done) => {
      facebookApi.logout().then(() => {
        td.verify(FAKE_API.logout(td.matchers.anything()));
        done();
      });
    });
  });
});
