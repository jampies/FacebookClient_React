import getFacebookApi from './getFacebookApi';
import assert from 'assert';

describe('getFacebookApi', () => {
  it('should return FB api even if only instantiated much later', (done) => {
    window.FB = undefined;
    getFacebookApi().then(fb => {
      assert.strictEqual(fb, 'FACEBOOK API');
      done();
    });
    setTimeout(() => {
      window.FB = 'FACEBOOK API';
    }, 750);
  });
});
