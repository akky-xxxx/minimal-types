import type { Equal, Overwrite, StandardizeObject } from "../../src"

type BaseObject = {
  a: number
  b: string
}
const overwriteNumberToString: Equal<
  StandardizeObject<Overwrite<BaseObject, { a: string }>>,
  { a: string; b: string }
> = true
