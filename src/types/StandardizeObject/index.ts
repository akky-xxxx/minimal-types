import type { CommonObject } from "../CommonObject"

/**
 * Standardize Object.
 *
 * @remarks
 * Union object type is treat as difference.
 *
 * @typeParam O - Object.
 */
export type StandardizeObject<O extends CommonObject> = {
  [K in keyof O]: O[K]
}
