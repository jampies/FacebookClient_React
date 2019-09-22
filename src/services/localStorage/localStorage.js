const testLocalStorageSupport = () => {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

window.data = {};

const storageWrapper = {
  getItem: key => {
    if (testLocalStorageSupport()) {
      return window.localStorage.getItem(key);
    } else {
      return window.data[key];
    }
  },
  setItem: (key, value) => {
    if (testLocalStorageSupport()) {
      window.localStorage.setItem(key, value);
    } else {
      window.data[key] = value;
    }
  },
  removeItem: key => {
    if (testLocalStorageSupport()) {
      window.localStorage.removeItem(key);
    } else {
      delete window.data[key];
    }
  }
};

export default storageWrapper;
