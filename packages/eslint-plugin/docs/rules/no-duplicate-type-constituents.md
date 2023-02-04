---
description: 'Disallow duplicate constituents of union or intersection types.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-duplicate-type-constituents** for documentation.

Although TypeScript supports types ("constituents") in union and intersection types being duplicates of each other, developers typically expect each constituent to be unique within the same intersection and union.
Duplicate values make the code overly verbose and generally reduce readability.

## Rule Details

This rule disallows duplicate union or intersection constituents.
We consider types to be duplicate if they evaluate to the same result in the type system.
For example, given `type A = string` and `type T = string | A`, this rule would flag `string | A`.

<!--tabs-->

### ❌ Incorrect

```ts
type T1 = 'A' | 'A';

type T2 = A | A | B;

type T3 = { a: string } & { a: string };

type T4 = [1, 2, 3] | [1, 2, 3];

type StringA = string;
type StringB = string;
type T5 = StringA | StringB;
```

### ✅ Correct

```ts
type T1 = 'A' | 'B';

type T2 = A | B | C;

type T3 = { a: string } & { b: string };

type T4 = [1, 2, 3] & [1, 2, 3, 4];

type StringA = string;
type NumberB = number;
type T5 = StringA | NumberB;
```

## Options

### `ignoreIntersections`

When set to true, duplicate checks on intersection type constituents are ignored.

### `ignoreUnions`

When set to true, duplicate checks on union type constituents are ignored.
