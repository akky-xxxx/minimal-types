# minimal types

The type that I personally would like to see incorporated into Typescript.

and so on.

## Installation

```shell
# by yarn
$ yarn add -D minimal-types

# by npm
$ npm i --save-dev minimal-types
```

## Types
| Type                                                 | Description                                                              |
|------------------------------------------------------|--------------------------------------------------------------------------|
| [AnyFunction](./docs/AnyFunction.md)                 | Use for temporary function or common the function, instead `Function`.   |
| [BuiltinObjectTypes](./docs/BuiltinObjectTypes.md)   | Built in Object types.                                                   |
| [CommonObject](./docs/CommonObject.md)               | Use for temporary Object or common the Object, instead `{}`, `object`.   |
| [ConstantCase](./docs/ConstantCase.md)               | Define the constant case.                                                |
| [ConvertCamelToSnake](./docs/ConvertCamelToSnake.md) | Change camel case string literal type to snake case string literal type. |
| [ConvertSnakeToCamel](./docs/ConvertSnakeToCamel.md) | Change snake case string literal type to camel case string literal type. |
| [DeepReadonly](./docs/DeepReadonly.md)               | Do readonly until to nested properties.                               «  |
| [DeepUnReadonly](./docs/DeepUnReadonly.md)           | Remove readonly until to nested properties.                              |
| [EmptyVoidFunction](./docs/EmptyVoidFunction.md)     | Common Function type that Not have arguments, return.                    |
| [Equal](./docs/Equal.md)                             | Determine if X and Y in params are equivalent.                           |
| [FixedLengthArray](./docs/FixedLengthArray.md)       | Define the array that fixed length.                                      |
| [Overwrite](./docs/Overwrite.md)                     | Overwrite property type.                                                 |
| [StandardizeObject](./docs/StandardizeObject.md)     | Union object type is treat as difference.                                |

## License
- [MIT](LICENSE)
