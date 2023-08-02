
## 3-1 Math Needed to Start Learning Programming Language

Before diving into learning JavaScript or any programming language, it's helpful to have a basic understanding of mathematics. Some essential math concepts that can be useful in programming include:

1. Arithmetic Operations: Addition, subtraction, multiplication, division, and modulus (remainder) operations are fundamental to programming.

2. Variables and Algebra: Understanding variables, constants, and basic algebraic expressions helps in grasping programming concepts.

3. Logic and Boolean Algebra: Familiarity with logical operators like AND, OR, NOT, and Boolean expressions is crucial for conditional statements and decision-making in programming.

4. Data Structures: Basic knowledge of arrays, lists, and data organization is beneficial for handling data in programming.

5. Problem-Solving Skills: Logical thinking and problem-solving skills are essential for writing efficient and effective code.

## 3-2 What is a Variable, Five Things You Need to Declare a Variable

In programming, a variable is a container used to store data or values. Here are five things you need to declare a variable in JavaScript:

1. Declaration Keyword: Use keywords like `var`, `let`, or `const` to declare a variable. For example:

   ```
   var myVariable;
   ```

2. Variable Name: Choose a unique name for the variable, following the naming conventions (discussed later). The name should be meaningful and describe the data it holds.

3. Assignment Operator: Use the assignment operator `=` to assign a value to the variable. For example:

   ```
   myVariable = 10;
   ```

4. Data Type: Variables have data types, such as numeric, string, boolean, etc. The data type is determined by the value assigned to the variable.

5. Optional Initialization: You can initialize a variable with a value during declaration itself. For example:

   ```
   var myNumber = 42;
   ```

## 3-3 Variable Types: Numeric, String, Boolean

In JavaScript, variables can hold different types of data:

1. Numeric: Used for storing numerical values. Example:

   ```
   var age = 25;
   ```

2. String: Used for storing text. Enclosed in single ('') or double ("") quotes. Example:

   ```
   var name = "John";
   ```

3. Boolean: Represents true or false values. Example:

   ```
   var isStudent = true;
   ```

## 3-4 JavaScript Keyword, Variable Name Naming Convention

JavaScript has reserved keywords that have specific meanings and cannot be used as variable names. Some examples include `var`, `let`, `const`, `if`, `else`, `function`, etc.

Naming conventions for variables in JavaScript usually follow these rules:

- Variable names can contain letters, digits, underscores (_), or dollar signs ($).
- Variable names must start with a letter, underscore, or dollar sign (not a digit).
- Variable names are case-sensitive.
- Choose descriptive names that reflect the purpose of the variable.

## 3-5 Simple Mathematical Operations in JavaScript

JavaScript supports basic mathematical operations:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Modulus (Remainder): `%`

Example:

```javascript
var num1 = 10;
var num2 = 5;

var sum = num1 + num2; // 15
var difference = num1 - num2; // 5
var product = num1 * num2; // 50
var quotient = num1 / num2; // 2
var remainder = num1 % num2; // 0
```

## 3-6 (Advanced) Mathematical Operation Shorthand

JavaScript offers shorthand notation for performing mathematical operations with the same variable:

- `+=` for addition: `x += y` is equivalent to `x = x + y`
- `-=` for subtraction: `x -= y` is equivalent to `x = x - y`
- `*=` for multiplication: `x *= y` is equivalent to `x = x * y`
- `/=` for division: `x /= y` is equivalent to `x = x / y`
- `%=` for modulus: `x %= y` is equivalent to `x = x % y`

Example:

```javascript
var x = 10;
var y = 5;

x += y; // x becomes 15 (x = 10 + 5)
x -= y; // x becomes 10 (x = 15 - 5)
x *= y; // x becomes 50 (x = 10 * 5)
x /= y; // x becomes 10 (x = 50 / 5)
x %= y; // x becomes 0 (x = 10 % 5)
```

## 3-7 (Advanced) String Concatenation, Type Conversion parseInt, parseFloat

String Concatenation: In JavaScript, you can concatenate strings using the `+` operator.

Example:

```javascript
var firstName = "John";
var lastName = "Doe";

var fullName = firstName + " " + lastName; // "John Doe"
```

Type Conversion: JavaScript can automatically convert between data types when needed, but sometimes you may need to manually convert strings to numbers or vice versa.

- `parseInt`: Converts a string to an integer (whole number).
- `parseFloat`: Converts a string to a floating-point number (decimal number).

Example:

```javascript
var numberStr = "42";
var number = parseInt(numberStr); // 42

var decimalStr = "3.14";
var decimal = parseFloat(decimalStr); // 3.14
```

## 3-8 Variable Types, toFixed, parseFloat, and Remainder

- `toFixed`: A method used with numbers to specify the number of decimal places to display when converting a number to a string.

Example:

```javascript
var pi = 3.14159265359;
var piStr = pi.toFixed(2); // "3.14"
```

- `parseFloat` and Remainder: We have already seen these concepts in the previous sections.

## 3-9 Declare Array, array length and array index

An array is a data structure that can store multiple values of the same type. In most programming languages, you can declare an array and initialize it with elements like this:

```javascript
// Declare and initialize an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Declare an empty array
let emptyArray = [];
```

You can access elements in an array using their index. Array indices start from 0, so the first element is at index 0, the second element at index 1, and so on.

```javascript
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // Output: 1 (element at index 0)
console.log(numbers[2]); // Output: 3 (element at index 2)
```

To get the length of an array (the number of elements it contains), you can use the `length` property:

```javascript
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.length); // Output: 5
```

## 3-10 Array index, get and set by index, indexOf

We've already covered array indexing and getting elements by index. Now, let's look at how to set elements at a specific index and find the index of a particular element in an array.

To set an element at a specific index, simply assign a value to that index:

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers[2] = 10; // Set element at index 2 to 10
console.log(numbers); // Output: [1, 2, 10, 4, 5]
```

To find the index of an element in an array, you can use the `indexOf()` method:

```javascript
let numbers = [1, 2, 3, 4, 5];

let index = numbers.indexOf(3);
console.log(index); // Output: 2 (3 is at index 2)
```

If the element is not found in the array, the `indexOf()` method returns -1.

## 3-11 Add or remove element from array using push, pop

Arrays come with built-in methods for adding and removing elements.

To add an element to the end of an array, you can use the `push()` method:

```javascript
let fruits = ['apple', 'banana'];

fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

To remove the last element from an array, you can use the `pop()` method:

```javascript
let fruits = ['apple', 'banana', 'orange'];

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']
```

## 3-12 Compare variables and Comparison operator

In programming, you often need to compare variables or values. The comparison operators allow you to do this. Here are the common comparison operators:

- Equal to: `==`
- Not equal to: `!=`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

These operators return a Boolean value (`true` or `false`) based on whether the comparison is true or false. For example:

```javascript
let a = 5;
let b = 10;

console.log(a == b); // Output: false
console.log(a > b);  // Output: false
console.log(a < b);  // Output: true
```

## 3-13 Make conditional decision, if-else, comparison

Conditional statements like `if` and `else` allow you to make decisions in your code based on certain conditions.

```javascript
let num = 10;

if (num > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is non-positive.");
}
```

In this example, if the value of `num` is greater than 0, it will print "The number is positive." Otherwise, it will print "The number is non-positive."

## 3-14 Handle multiple conditions, and or

You can use logical operators such as `&&` (AND) and `||` (OR) to handle multiple conditions in your conditional statements.

```javascript
let num = 15;

if (num > 0 && num < 10) {
  console.log("The number is between 1 and 9.");
} else if (num >= 10 || num < 0) {
  console.log("The number is greater than or equal to 10 or less than 0.");
} else {
  console.log("The number is between 0 and 10.");
}
```

## 3-15 (advanced) Multi stage condition and nested conditions

You can have multi-stage conditions and nest conditional statements within each other to handle more complex scenarios.

```javascript
let num = 20;

if (num > 0) {
  if (num < 10) {
    console.log("The number is a single-digit positive number.");
  } else {
    console.log("The number is a two-digit or greater positive number.");
  }
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
```

In this example, we first check if `num` is positive or negative. If it's positive, we further check if it's a single-digit or a two-digit or greater positive number.



## 3-16 Fundamentals of Arrays

An array is a data structure that allows you to store multiple values of the same type in a single variable. Arrays are zero-indexed, which means the first element is accessed using index 0, the second with index 1, and so on.

Example of declaring an array in JavaScript:
```javascript
let numbers = [1, 2, 3, 4, 5];
```

## 3-17 While Loop, Debug, and Understand While Loop

The `while` loop is used to repeatedly execute a block of code as long as a specified condition is true. The loop continues until the condition becomes false.

Example of a while loop in JavaScript:
```javascript
let i = 0;
while (i < 5) {
  console.log("Iteration: " + i);
  i++;
}
```

## 3-18 Loop Example: Numbers, Odd Numbers, Even Numbers

Let's write examples of using while loops to print numbers, odd numbers, and even numbers from 1 to 10.

```javascript
// Print numbers from 1 to 10
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

// Print odd numbers from 1 to 10
let oddNum = 1;
while (oddNum <= 10) {
  console.log(oddNum);
  oddNum += 2;
}

// Print even numbers from 1 to 10
let evenNum = 2;
while (evenNum <= 10) {
  console.log(evenNum);
  evenNum += 2;
}
```

## 3-19 For Loop, How For Loop Works, While vs For Loop

The `for` loop is another way to repeat a block of code for a specified number of times. It's commonly used when you know the number of iterations beforehand.

Example of a for loop in JavaScript:
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}
```

## 3-20 Run a Loop for Each Element of an Array

You can use both while and for loops to iterate over the elements of an array.

Using a for loop to print all elements of an array:
```javascript
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## 3-21 (Advanced) While and For Loop Break and Continue

You can use the `break` statement to exit a loop prematurely, and the `continue` statement to skip the current iteration and move to the next one.

Example using a for loop with break and continue:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip iteration 2
  }
  if (i === 4) {
    break; // Exit the loop when i reaches 4
  }
  console.log("Iteration: " + i);
}
```

## 3-22 (Advanced) Understand For and While Loop in a Reverse Way

You can use loops to iterate over elements in reverse order.

Example of using a for loop in reverse:
```javascript
for (let i = 5; i >= 0; i--) {
  console.log("Iteration: " + i);
}
```

## 3-23 Subtraction, Average, and Remainder Practice Problem

Let's create a JavaScript function to perform subtraction, calculate the average of an array, and find the remainder of a division.

```javascript
// Subtraction
function subtract(a, b) {
  return a - b;
}

// Calculate average of an array
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Find the remainder of a division
function findRemainder(dividend, divisor) {
  return dividend % divisor;
}

// Test the functions
console.log(subtract(10, 5)); // Output: 5
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findRemainder(10, 3)); // Output: 1
```

## 3-23 if-else and Array Related Practice Problems

Let's create a JavaScript function to find the maximum and minimum elements in an array and a function to check if a given number is even or odd.

```javascript
// Find maximum element in an array
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Find minimum element in an array
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// Check if a number is even or odd
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Test the functions
let numbersArray = [7, 2, 9, 1, 5];
console.log("Max: " + findMax(numbersArray)); // Output: 9
console.log("Min: " + findMin(numbersArray)); // Output: 1
console.log(isEvenOrOdd(7)); // Output: Odd
console.log(isEvenOrOdd(4)); // Output: Even
```



## 3-24 Declare a Function, Call Function, Function vs. Loop

Declaring a Function in JavaScript:
A function in JavaScript is defined using the `function` keyword, followed by the function name, a list of parameters in parentheses (if any), and the function body enclosed in curly braces. Here's the basic syntax:

```javascript
// Function declaration
function functionName(parameter1, parameter2) {
  // Function body
  // Code to be executed when the function is called
  // ...
}
```

Calling a Function:
To execute a function, you simply need to call it by using its name, followed by parentheses containing the arguments (if any). For example:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
```

Function vs. Loop:
Functions and loops serve different purposes in programming:

- Functions: Functions are blocks of code that perform a specific task and can be called multiple times throughout the program. They help in organizing code, promoting reusability, and make it easier to understand and maintain the program.

- Loops: Loops, on the other hand, are used to repeat a set of instructions multiple times until a certain condition is met. They are commonly used for iterating over arrays, objects, or any other data structures.

Example:

```javascript
// Function example
function calculateSquare(num) {
  return num * num;
}

let result = calculateSquare(5);
console.log(result); // Output: 25

// Loop example
for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1, 2, 3, 4, 5
}
```

## 3-25 Add Function Parameter, Handle Multiple Parameters

Functions can have parameters that act as placeholders for the values passed to the function when it's called. You can declare multiple parameters separated by commas.

Example:

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}

let sum = addNumbers(3, 5);
console.log(sum); // Output: 8
```

Handling Multiple Parameters:
You can add as many parameters as needed, and the values passed while calling the function will be matched to the corresponding parameters in the function definition.

```javascript
function multiplyNumbers(a, b, c) {
  return a * b * c;
}

let product = multiplyNumbers(2, 3, 4);
console.log(product); // Output: 24
```

## 3-26 Everything You Need to Know About Return from a Function

The `return` statement is used in a function to specify the value that the function will provide as output. When a function is called and reaches a `return` statement, it immediately stops executing, and the value after `return` is returned as the function's result.

If a function doesn't have a `return` statement or has a `return` statement without a value, the function returns `undefined`.

Example:

```javascript
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(2, 3);
console.log(result); // Output: 5
```

A function can have multiple `return` statements, but only one of them will be executed, depending on the flow of the function.

```javascript
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(5)); // Output: true
console.log(isPositive(-2)); // Output: false
```

The `return` statement can also be used to exit a function early, even before reaching the end of the function body.

```javascript
function greet(name) {
  if (!name) {
    return; // If the name is not provided, exit the function early
  }
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
greet(); // Output: (nothing)
```

## 3-27 Function Examples and Function Summary

Example 1 - Function to Check if a Number is Even:

```javascript
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
```

Example 2 - Function to Calculate the Factorial of a Number:

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

Example 3 - Function to Convert Celsius to Fahrenheit:

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
```

Function Summary:

- Functions are blocks of code that perform a specific task and can be called multiple times.
- They can take parameters as inputs, allowing them to work with different data.
- The `return` statement is used to specify the value that the function provides as output.
- Functions enhance code reusability, modularity, and make the code easier to understand and maintain.

## 3-28 Declare Multiple Objects with Multiple Properties

In JavaScript, you can declare multiple objects with multiple properties using object literals. An object is a collection of key-value pairs, where keys are also known as property names, and values are the data associated with those properties.

Example:

```javascript
// Declaring multiple objects with multiple properties
let person1 = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

let person2 = {
  name: "Alice",
  age: 25,
  occupation: "Teacher"
};

// Accessing object properties
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
```

You can also use the `new Object()` constructor to create objects:

```javascript
let car1 = new Object();
car1.make = "Toyota";
car1.model = "Camry";
car1.year = 2020;

let car2 = new Object();
car2.make = "Honda";
car2.model = "Civic";
car2.year = 2018;
```

## 3-29 Multiple Ways to Get and Set Object Property

There are multiple ways to get and set object properties in JavaScript.

1. Dot notation:

```javascript
let person = {
  name: "John",
  age: 30
};

// Getting object property using dot notation
console.log(person.name); // Output: John

// Setting object property using dot notation
person.age = 35;
console.log(person.age); // Output: 35
```

2. Bracket notation:

```javascript
let person = {
  name: "John",
  age: 30
};

// Getting object property using bracket notation
console.log(person["name"]); // Output: John

// Setting object property using bracket notation
person["age"] = 35;
console.log(person["age"]); // Output: 35
```

3. Computed property names (ES6):

```javascript
let

 propertyName = "name";
let person = {
  [propertyName]: "John",
  age: 30
};

console.log(person.name); // Output: John
```

4. `Object.keys()` and `Object.values()` methods:

```javascript
let person = {
  name: "John",
  age: 30
};

// Getting object properties using Object.keys()
let keys = Object.keys(person);
console.log(keys); // Output: ["name", "age"]

// Getting object values using Object.values()
let values = Object.values(person);
console.log(values); // Output: ["John", 30]
```

## 3-30 (Advanced) Looping Through an Object and Object Summary

Looping Through an Object:
To loop through an object in JavaScript, you can use `for...in` loop or `Object.entries()` method.

Using `for...in` loop:

```javascript
let person = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

Using `Object.entries()` method:

```javascript
let person = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

Object.entries(person).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
```

Object Summary:

- Objects in JavaScript are collections of key-value pairs.
- Properties in an object can be accessed and set using dot notation or bracket notation.
- You can use `for...in` loop or `Object.entries()` method to loop through an object and access its properties and values.
- Objects are useful for representing complex data structures and are a fundamental part of JavaScript programming.



