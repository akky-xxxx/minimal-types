/**
 * Define the constant case
 *
 * @remarks
 * As example, use for the satisfies
 *
 * @typeParam S - Base string that is treated constant case
 *
 * FIXME: want to limit enable characters to alphabet, numeric, underscore
 */
export type ConstantCase<S extends string = string> = Uppercase<S>
