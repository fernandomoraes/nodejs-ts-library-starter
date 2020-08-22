import { plus, minus, times, dividedBy } from '../index';

test('should sum', async () => {
  expect(plus(2, 2)).toEqual(4);
});

test('should substract', () => {
  expect(minus(2, 2)).toEqual(0);
});

test('should multiply', () => {
  expect(times(2, 2)).toEqual(4);
});

test('should divide', () => {
  expect(dividedBy(2, 2)).toEqual(1);
});
