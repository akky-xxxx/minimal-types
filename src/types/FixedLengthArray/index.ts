/**
 * Define the array that fixed length
 *
 * @typeParam T - Types of array value
 * @typeParam N - Number that want to fixed length
 */
export type FixedLengthArray<
  T,
  N extends number,
  R extends T[] = [],
> = R["length"] extends N ? R : FixedLengthArray<T, N, [T, ...R]>
