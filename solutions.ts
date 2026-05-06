// blog-1.md

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// blog-2.md

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Example
console.log(reverseString("typescript"));