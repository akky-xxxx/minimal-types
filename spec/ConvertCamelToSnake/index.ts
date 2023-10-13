import type { Equal, ConvertCamelToSnake } from "../../src"

// true patterns
const truePattern1: Equal<ConvertCamelToSnake<"true">, "true"> = true
const truePattern2: Equal<
  ConvertCamelToSnake<"truePattern">,
  "true_pattern"
> = true
const truePattern3: Equal<
  ConvertCamelToSnake<"trueTrueTrue">,
  "true_true_true"
> = true
