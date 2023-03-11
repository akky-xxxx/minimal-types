import type { Equal } from "../../src"

// true patterns
const twoTypesIsEqualAtNumber: Equal<1, 1> = true
const twoTypesIsEqualAtString: Equal<"1", "1"> = true
const twoTypesIsEqualAtEmptyArray: Equal<[], []> = true
const twoTypesIsEqualAtNotEmptyArray: Equal<[1], [1]> = true
const twoTypesIsEqualAtSameObject: Equal<{ a: 1 }, { a: 1 }> = true
const twoTypesIsEqualAtBoolean: Equal<true, true> = true
const twoTypesIsEqualAtFunction: Equal<() => void, () => void> = true

// false patterns
const twoTypesIsNotEqualAtNumberAndString: Equal<1, "1"> = false
const twoTypesIsNotEqualAtEmptyArrayAndNotEmptyArray: Equal<[], [1]> = false
const twoTypesIsNotEqualAtHasDifferKeyObjects: Equal<{ a: 1 }, { b: 1 }> = false
const twoTypesIsNotEqualAtHasDifferValueObjects: Equal<{ a: 1 }, { a: 2 }> =
  false
const twoTypesIsNotEqualAtTrueAndFalse: Equal<true, false> = false
const twoTypesIsNotEqualAtDifferParametersFunction: Equal<
  () => void,
  (argument: string) => void
> = false
const twoTypesIsNotEqualAtDifferReturnFunction: Equal<
  () => void,
  () => string
> = false
