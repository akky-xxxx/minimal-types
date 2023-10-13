/**
 * convert snake case string to camel case string
 *
 * @typeParam S - string literal.
 */
export type ConvertSnakeToCamel<S extends string> =
  S extends `${infer C1}_${infer C2}${infer C3}`
    ? `${Lowercase<C1>}${Uppercase<C2>}${ConvertSnakeToCamel<C3>}`
    : Lowercase<S>
