# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript helps developers write safer and more reliable code through static typing. However, using the `any` type can disable TypeScript’s safety features completely. That is why developers often call `any` a “type safety hole.” On the other hand, `unknown` provides flexibility while maintaining type safety.

---

## The Problem with `any`

The `any` type allows any kind of value and disables type checking.

```ts
let value: any = "Hello TypeScript";

console.log(value.toFixed());# Why `any` is Called a Type Safety Hole and Why `unknown` is Safer

## Introduction

In TypeScript, type safety is very important.  
But using `any` removes TypeScript’s checking system completely.  
That’s why `any` is called a **type safety hole**.

On the other hand, `unknown` is safer because TypeScript forces us to check the type before using it.

---

# Problem with `any`

The `any` type allows every kind of operation without checking.

## Example

```ts
let value: any = "Hello";

console.log(value.toFixed());