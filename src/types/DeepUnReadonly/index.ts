/**
 * Remove readonly until to nested properties
 *
 * @typeParam T - Object
 */
export type DeepUnReadonly<T> = {
  -readonly [key in keyof T]: DeepUnReadonly<T[key]>
}
