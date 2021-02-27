// eslint-disable-next-line no-unused-vars
import { debounce } from './debounce';

describe('debounce', () => {
  test('should run after 5 seconds and print hello only once', () => {
    // eslint-disable-next-line no-console
    const debouncedFn = debounce(() => console.log('hello'), 5000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
  });
});
