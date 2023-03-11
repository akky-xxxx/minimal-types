import type { Equal, DeepUnReadonly } from "../../src"

// true patterns
const firstFloorIsNotReadonly: Equal<
  DeepUnReadonly<{ readonly a: number }>,
  { a: number }
> = true
const allFloorIsNotReadonly: Equal<
  DeepUnReadonly<{ readonly a: { readonly b: number } }>,
  { a: { b: number } }
> = true

// false patterns
const firstFloorIsReadonly: Equal<
  DeepUnReadonly<{ readonly a: number }>,
  { readonly a: number }
> = false
const secondFloorIsReadonly: Equal<
  DeepUnReadonly<{ readonly a: { readonly b: number } }>,
  { readonly a: { b: number } }
> = false
const allFloorIsReadonly: Equal<
  DeepUnReadonly<{ readonly a: { readonly b: number } }>,
  { readonly a: { b: number } }
> = false
