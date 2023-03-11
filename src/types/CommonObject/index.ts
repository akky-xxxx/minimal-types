type Key = number | string | symbol

/**
 * Use for temporary Object or common the Object, instead `{}`, `object`
 *
 * @typeParam K - Type that can apply to index
 * @typeParam P - Property type
 */
export type CommonObject<K extends Key = Key, P = unknown> = Record<K, P>
