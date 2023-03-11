import type { Equal, DeepReadonly } from "../../src"

// true patterns
const firstFloorIsReadonly: Equal<
  DeepReadonly<{ a: number }>,
  { readonly a: number }
> = true
const allFloorIsReadonly: Equal<
  DeepReadonly<{ a: { b: number } }>,
  { readonly a: { readonly b: number } }
> = true

// false patterns
const firstFloorIsNotReadonly: Equal<
  DeepReadonly<{ a: number }>,
  { a: number }
> = false
const secondFloorIsNotReadonly: Equal<
  DeepReadonly<{ a: { b: number } }>,
  { a: { readonly b: number } }
> = false
const allFloorIsNotReadonly: Equal<
  DeepReadonly<{ a: { b: number } }>,
  { a: { b: number } }
> = false
