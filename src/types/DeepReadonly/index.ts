/**
 * Do readonly until to nested properties.
 *
 * @typeParam T - Object.
 */
export type DeepReadonly<T> = {
  readonly [key in keyof T]: DeepReadonly<T[key]>
}
