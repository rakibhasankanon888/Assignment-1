# Problem 1: Why `any` is Called a Type Safety Hole and Why `unknown` is Safer

## Introduction

TypeScript helps developers write safer and more reliable code through static typing. However, using the `any` type disables TypeScript’s safety features completely. That is why developers often call `any` a “type safety hole.”

On the other hand, `unknown` is a safer alternative because it forces developers to check the type before using the value.

---

## The Problem with `any`

The `any` type allows every kind of operation without type checking.

### Example

```ts
let value: any = "Hello TypeScript";

console.log(value.toFixed());