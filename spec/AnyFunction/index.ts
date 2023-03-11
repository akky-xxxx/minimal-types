import type { AnyFunction, Equal } from "../../src"

const parametersIsAnyArray: Equal<Parameters<AnyFunction>, any[]> = true
const returnIsAny: Equal<ReturnType<AnyFunction>, any> = true
