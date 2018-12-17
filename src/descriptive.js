/**
 * Return the minimum of a numeric data array.
 * @param {Number[]} arr the data array
 * @returns {Number} the minimum of the data array
 */
export function min(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result = arr[i] > result ? result : arr[i];
  }
  return result;
}

/**
 * Return the maximum of a numeric data array.
 * @param {Number[]} arr the data array
 * @returns {Number} the maximum of the data array
 */
export function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result = arr[i] < result ? result : arr[i];
  }
  return result;
}

/**
 * Return the sum of all entries in a numeric array,
 * using the Kahan summation algorithm.
 * This compensates for loss of precision when the result is large compared to
 * the smallest items in the array.
 * See https://en.wikipedia.org/wiki/Kahan_summation_algorithm
 * @param {Number[]} arr the data array
 * @returns {Number} the sum of all entries in the array
 */
export function sum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = 0;
  let c = 0; // Running compensation of accumulated floating point errors
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    const y = arr[i] - c;
    const t = result + y; // result is large and y may be small, so least significant bits of y may be lost.
    c = (t - result) - y; // (t - result) cancels the high-order part of y, so we're left with only the least bits
    result = t; // carry over c to the next iteration
  }
  return result;
}

/**
 * Returns the product of all entries in a numeric data array.
 * @param {Number[]} arr the data array
 * @returns {Number} the product of all entries in the array
 */
export function product(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result *= arr[i];
  }
  return result;
}

export default {
  min,
  max,
  sum,
  product,
};
