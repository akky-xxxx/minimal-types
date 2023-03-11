import type { EmptyVoidFunction, Equal } from "../../src"

const parametersIsEmptyArray: Equal<Parameters<EmptyVoidFunction>, []> = true
const returnIsVoid: Equal<ReturnType<EmptyVoidFunction>, void> = true
