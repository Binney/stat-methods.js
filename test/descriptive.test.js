import{ testUndefinedWithNullable } from './utils';
import {
  min,
  max,
  sum,
} from '../src/descriptive';

describe('Descriptive Statistics', () => {
  test('Minimum', () => {
    expect(min([1, 1, 2, 3, 4, 4])).toBe(1);
    expect(min([2.5, 3.25, -2, 5.75])).toBe(-2);
    expect(min(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(min([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(min([])).toBeUndefined();
    expect(min(3)).toBeUndefined();
    expect(min([3])).toBe(3);
    expect(min([3, 2.5, 200, 5.75])).toBe(2.5);
    testUndefinedWithNullable(min);
  });

  test('Maximum', () => {
    expect(max([1, 2, 3, 4, 4])).toBe(4);
    expect(max([2.5, 3.25, -2, 5.75])).toBe(5.75);
    expect(max(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(max([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(max([])).toBeUndefined();
    expect(max(3)).toBeUndefined();
    expect(max([3])).toBe(3);
    expect(max([3, 2.5, 200, 5.75])).toBe(200);
    testUndefinedWithNullable(max);
  });

  test('Sum', () => {
    expect(sum([])).toBe(0);
    expect(sum(3)).toBeUndefined();
    expect(sum([3])).toBe(3);
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
    expect(sum([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]))
      .toBe(15.3);

    var veryLongArray = [10000, 0];
    for (let i = 1; i < 501; i++) {
      veryLongArray[i] = 0.000001;
    }
    expect(sum(veryLongArray)).toBe(10000.0005);

    expect(sum()).toBeUndefined();
    expect(sum(['a', 2, 3, 4])).toBeUndefined();
    expect(sum([1, 2, NaN, 4])).toBeUndefined();
    testUndefinedWithNullable(sum);
  });
});
