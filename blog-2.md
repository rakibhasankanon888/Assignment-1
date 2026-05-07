# Problem 2: How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

Generics are one of the most powerful features of TypeScript. They allow developers to create reusable functions, classes, and components that work with multiple data types while still maintaining strict type safety.

Without generics, developers often need to write duplicate code for different types. Generics solve this problem in a clean and scalable way.

---

## What is a Generic?

A generic is a placeholder type (like `<T>`) that allows a function or component to work with different data types.

### Example

```ts id="8v2m7x"
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));