import localStorage from './localStorage';
import td from 'testdouble';

describe('localStorage Wrapper', () => {
  let originalLocalStorage;

  before(() => {
    originalLocalStorage = window.localStorage;
  });

  after(() => {
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      configurable: true,
      enumerable: true,
      writable: true
    });
  });

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: td.function('setItem'),
        getItem: td.function('getItem'),
        removeItem: td.function('removeItem')
      },
      configurable: true,
      enumerable: true,
      writable: true
    });
  });

  describe('setItem', () => {
    it('passes through the params when localStorage is enabled', () => {
      localStorage.setItem('foo', 'bar');
      td.verify(window.localStorage.setItem('foo', 'bar'));
    });

    it('does not call localStorage when localStorage is disabled', () => {
      td.when(window.localStorage.setItem('test', '1')).thenThrow(new Error('blah'));
      localStorage.setItem('foo', 'bar');
      td.verify(window.localStorage.setItem('foo', 'bar'), { times: 0 });
    });
  });

  describe('getItem', () => {
    it('passes through the params when localStorage is enabled', () => {
      localStorage.getItem('foo');
      td.verify(window.localStorage.getItem('foo'));
    });

    it('does not call localStorage when localStorage is disabled', () => {
      td.when(window.localStorage.setItem('test', '1')).thenThrow(new Error('blah'));
      localStorage.getItem('foo');
      td.verify(window.localStorage.getItem('foo'), { times: 0 });
    });
  });

  describe('removeItem', () => {
    it('passes through the params when localStorage is enabled', () => {
      localStorage.removeItem('foo');
      td.verify(window.localStorage.removeItem('foo'));
    });

    it('does not call localStorage when localStorage is disabled', () => {
      td.when(window.localStorage.setItem('test', '1')).thenThrow(new Error('blah'));
      localStorage.removeItem('foo');
      td.verify(window.localStorage.removeItem('foo'), { times: 0 });
    });
  });
});
