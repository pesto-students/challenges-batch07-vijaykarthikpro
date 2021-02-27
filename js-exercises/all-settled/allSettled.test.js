import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('Promise call should return an array of promise status', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];

    const resultArray = ['fulfilled', 'rejected'];

    allSettled(promises)
      .then((results) => results.forEach((result, index) => {
        expect(result.status).toEqual(resultArray[index]);
      }));
  });
});
