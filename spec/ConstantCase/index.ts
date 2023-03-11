import type { ConstantCase, Equal } from "../../src"

// true patterns
const lowercaseChangeToUppercase: Equal<
  ConstantCase<"constant_case1">,
  "CONSTANT_CASE1"
> = true
const uppercaseIsKeep: Equal<
  ConstantCase<"CONSTANT_CASE2">,
  "CONSTANT_CASE2"
> = true
const defaultIsUppercase: Equal<ConstantCase, Uppercase<string>> = true

// false patterns
const defaultIsNotLowercase: Equal<ConstantCase, Lowercase<string>> = false
