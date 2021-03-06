export default function () {
  let counter = 0;

  return new Promise((resolve) => {
    function getFB () {
      counter++;
      if (typeof window.FB !== 'undefined') return resolve(window.FB);

      if (counter > 5) {
        throw new Error('Unable to connect with Facebook Api');
      } else {
        setTimeout(getFB, 500);
      }
    }
    getFB();
  });
}
