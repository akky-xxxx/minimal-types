import type { CommonObject } from "../CommonObject"

/**
 * Overwrite property type
 *
 * @typeParam B - Object that be overwritten
 * @typeParam O - Object that overwrite B
 */
export type Overwrite<
  B extends CommonObject,
  O extends CommonObject,
  OK extends keyof O = keyof O,
> = O & Omit<B, OK>
