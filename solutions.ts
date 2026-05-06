// blog-1.md

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// blog-2.md

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("typescript"));



// blog-3.md

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

console.log(checkType("Hello"));
console.log(checkType(42));


// blog-4.md

function getProperty<T, X extends keyof T>(obj: T, key: X): T[X] {
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));