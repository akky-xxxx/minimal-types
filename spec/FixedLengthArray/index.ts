import type { Equal, FixedLengthArray } from "../../src"

// true patterns
const stringArrayAndLength2: Equal<
  FixedLengthArray<string, 2>,
  [string, string]
> = true
const numberArrayAndLength3: Equal<
  FixedLengthArray<number, 3>,
  [number, number, number]
> = true

// false patterns
const stringArrayNotFixedLength: Equal<
  FixedLengthArray<string, 2>,
  string[]
> = false
const numberArrayNotFixedLength: Equal<
  FixedLengthArray<number, 2>,
  number[]
> = false
