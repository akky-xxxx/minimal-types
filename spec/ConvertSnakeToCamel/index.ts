import type { Equal, ConvertSnakeToCamel } from "../../src"

// true patterns
const truePattern1: Equal<ConvertSnakeToCamel<"TRUE">, "true"> = true
const truePattern2: Equal<
  ConvertSnakeToCamel<"TRUE_PATTERN">,
  "truePattern"
> = true
const truePattern3: Equal<
  ConvertSnakeToCamel<"TRUE_TRUE_TRUE">,
  "trueTrueTrue"
> = true
