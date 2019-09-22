import td from 'testdouble';
import { LOCAL_STORAGE } from '../../config/constants';
import assert from 'assert';

describe('authService', () => {
  let authService;
  let fakeLocalStorage;

  beforeEach(() => {
    fakeLocalStorage = td.replace('../localStorage/localStorage').default;
    authService = require('./authService').default;
  });

  afterEach(() => {
    td.reset();
  });

  describe('isAuthenticated()', () => {
    it('should return true if localStorage AUTH has a value', () => {
      td.when(fakeLocalStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)).thenReturn('AUTH123');

      assert(authService.isAuthenticated());
    });

    it('should return false if localStorage AUTH does not have a value', () => {
      td.when(fakeLocalStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)).thenReturn(null);

      assert(!authService.isAuthenticated());
    });
  });
});
