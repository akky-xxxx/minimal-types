/**
 * convert camel case string to snake case string
 *
 * @typeParam S - string literal.
 */
export type ConvertCamelToSnake<S extends string> =
  S extends `${infer C1}${infer C2}`
    ? `${C1 extends Capitalize<C1>
        ? "_"
        : ""}${Lowercase<C1>}${ConvertCamelToSnake<C2>}`
    : S
