const ONE = 1
const TWO = 2

type One = typeof ONE
type Two = typeof TWO

/**
 * Determine if X and Y in params are equivalent.
 *
 * @typeParam X - Valuation target 1.
 * @typeParam Y - Valuation target 2.
 */
export type Equal<X, Y> = (<T>() => T extends X ? One : Two) extends <
  T,
>() => T extends Y ? One : Two
  ? true
  : false
