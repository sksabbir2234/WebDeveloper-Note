
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

2. Variable Name: Choose a unique name for the variable, following the naming conventions.The name should be meaningful and describe the data it holds.

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

## 3-4 JavaScript Keyword, Variable Name, Naming Convention

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

### 3-30 What are functions

In JavaScript, functions are blocks of code that perform a specific task or a set of tasks. They are reusable pieces of code that can be called multiple times from different parts of the program. Functions can take input parameters, perform some actions, and optionally return a value. They help in organizing code, improving reusability, and making the code easier to maintain.

Example of a simple function in JavaScript:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!
console.log(greet("Alice")); // Output: Hello, Alice!
```

### 3-31 JS Concepts recap, var, let, and const

In JavaScript, `var`, `let`, and `const` are used to declare variables.

1. `var`: Prior to ES6, `var` was the only way to declare variables in JavaScript. It has function scope, which means it is only accessible within the function where it is declared, or it becomes a global variable if declared outside any function. Avoid using `var` in modern JavaScript.

2. `let`: Introduced in ES6, `let` has block scope, meaning it is accessible only within the block (enclosed by curly braces `{}`) where it is defined.

3. `const`: Also introduced in ES6, `const` is used to declare constants, which cannot be re-assigned after initialization. It also has block scope.

Example:

```javascript
function exampleScope() {
  var x = 1;
  let y = 2;
  const z = 3;

  if (true) {
    var x = 10; // This will override the previous 'x'
    let y = 20; // This creates a new 'y' within the block
    const z = 30; // This creates a new 'z' within the block

    console.log(x, y, z); // Output: 10 20 30
  }

  console.log(x, y, z); // Output: 10 2 3
}

exampleScope();
```

### 3-32 Unit Convert Inch to Feet, miles to kilometer

Here are two simple functions to convert inches to feet and miles to kilometers:

```javascript
function inchesToFeet(inches) {
  return inches / 12;
}

function milesToKilometers(miles) {
  return miles * 1.60934;
}

console.log(inchesToFeet(36)); // Output: 3
console.log(milesToKilometers(10)); // Output: 16.0934
```

### 3-33 Check even and odd numbers using function

You can create a function to check whether a number is even or odd:

```javascript
function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return !isEven(number);
}

console.log(isEven(4)); // Output: true
console.log(isOdd(7)); // Output: true
```

### 3-34 Check whether a year is a Leap Year or not (simplified way)

A leap year is a year that is evenly divisible by 4, except for years that are evenly divisible by 100. However, years that are evenly divisible by 400 are leap years. Here's a simplified function to check if a year is a leap year:

```javascript
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
```

### 3-35 Calculate Sum of all numbers of an array

To calculate the sum of all numbers in an array, you can use a loop to iterate through the array and accumulate the sum:

```javascript
function arraySum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
console.log(arraySum([10, 20, 30])); // Output: 60
```

### 3-36 Get Odd Numbers of an array and get odd Sum of an array

You can create two functions - one to filter out odd numbers from an array and another to calculate their sum:

```javascript
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

function getOddSum(arr) {
  return arraySum(getOddNumbers(arr));
}

console.log(getOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(getOddSum([1, 2, 3, 4, 5])); // Output: 9
```

Note that we reused the `arraySum` function from example 20-5.

### 3-37 Calculate Factorial of a number using for loop

You can use a `for` loop to calculate the factorial of a number:

```javascript
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
```

### 3-38 Factorial using a while loop or a decrementing loop

You can achieve the same result using a `while` loop or a decrementing loop:

```javascript
// Using a while loop
function factorialWhile(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}

// Using a decrementing loop
function factorialDecrement(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorialWhile(5)); // Output: 120
console.log(factorialDecrement(5)); // Output: 120
```



### 3-39 String comparison using toLowerCase toUpperCase

In JavaScript, you can use the `toLowerCase()` and `toUpperCase()` methods to convert strings to lowercase and uppercase, respectively. These methods are useful for string comparison when you want to ignore case sensitivity.

Example:
```javascript
const str1 = 'Hello';
const str2 = 'hello';

console.log(str1.toLowerCase() === str2.toLowerCase()); // true
console.log(str1.toUpperCase() === str2.toUpperCase()); // true
```

```javascript
const originalString = "   Hello World   ";

// charAt
const charAtIndex = originalString.charAt(1); // "e"
console.log(charAtIndex);

// charCodeAt
const charCodeAtIndex = originalString.charCodeAt(1); // 101
console.log(charCodeAtIndex);

// concat
const concatenatedString = originalString.concat("!!!"); // "   Hello World   !!!"
console.log(concatenatedString);

// indexOf
const indexOfO = originalString.indexOf("o"); // 7
console.log(indexOfO);

// lastIndexOf
const lastIndexOfO = originalString.lastIndexOf("o"); // 10
console.log(lastIndexOfO);

// slice
const slicedString = originalString.slice(4, 9); // "o Wor"
console.log(slicedString);

// substring
const substringString = originalString.substring(4, 9); // "o Wor"
console.log(substringString);

// substr
const substrString = originalString.substr(4, 5); // "o Wor"
console.log(substrString);

// toUpperCase
const upperCaseString = originalString.toUpperCase(); // "   HELLO WORLD   "
console.log(upperCaseString);

// toLowerCase
const lowerCaseString = originalString.toLowerCase(); // "   hello world   "
console.log(lowerCaseString);

// trim
const trimmedString = originalString.trim(); // "Hello World"
console.log(trimmedString);

// replace
const replacedString = originalString.replace("Hello", "Hi"); // "   Hi World   "
console.log(replacedString);

// split
const splitArray = originalString.split(" "); // ["", "", "", "Hello", "World", "", "", ""]
console.log(splitArray);

// startsWith
const startsWithHello = originalString.startsWith("Hello"); // false
console.log(startsWithHello);

// endsWith
const endsWithWorld = originalString.endsWith("World"); // false
console.log(endsWithWorld);

// includes
const includesWorld = originalString.includes("World"); // true
console.log(includesWorld);

```

### 3-40 Apply Search includes, indexOf, startsWith, endsWith

These methods are used to search for substrings within a string.

- `search`: Returns the index of the first occurrence of a pattern in a string. It supports regular expressions.
- `includes`: Checks if a substring is present in the given string and returns a boolean value.
- `indexOf`: Returns the index of the first occurrence of a substring. Returns -1 if not found.
- `startsWith`: Checks if a string starts with a specified substring and returns a boolean value.
- `endsWith`: Checks if a string ends with a specified substring and returns a boolean value.

Example:

```javascript
const sentence = 'This is a sample sentence';

console.log(sentence.search('sample')); // 10
console.log(sentence.includes('is')); // true
console.log(sentence.indexOf('is')); // 2
console.log(sentence.startsWith('This')); // true
console.log(sentence.endsWith('sentence')); // true
```

### 3-41 How to split, slice, substr, substring, concat, join

These are common string manipulation methods.

- `split`: Splits a string into an array of substrings based on a specified delimiter.
- `slice`: Extracts a portion of a string and returns it as a new string.
- `substr`: Similar to `slice`, but takes a starting index and a length to extract.
- `substring`: Similar to `slice`, but takes start and end indices to extract.
- `concat`: Joins two or more strings together.
- `join`: Joins elements of an array into a string using a specified separator.

Example:

```javascript
const sentence = 'This is a sample sentence';

console.log(sentence.split(' ')); // ['This', 'is', 'a', 'sample', 'sentence']
console.log(sentence.slice(5, 7)); // 'is'
console.log(sentence.substr(10, 6)); // 'sample'
console.log(sentence.substring(0, 4)); // 'This'
console.log('Hello'.concat(' ', 'World')); // 'Hello World'
console.log(['Hello', 'World'].join(' ')); // 'Hello World'
```

### 3-42 Math, abs, pow, round, ceil, floor, and random number

These are useful mathematical operations available in the `Math` object.

- `abs`: Returns the absolute value of a number.
- `pow`: Returns the base to the power of the exponent.
- `round`: Rounds a number to the nearest integer.
- `ceil`: Rounds a number up to the nearest integer.
- `floor`: Rounds a number down to the nearest integer.
- `random`: Generates a random number between 0 (inclusive) and 1 (exclusive).

Example:

```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.round(3.6)); // 4
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.8)); // 3
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)
```

### 3-43 Swap variable, swap without temp, destructuring

In JavaScript, you can swap the values of two variables using a temporary variable or using destructuring assignment.

Example (with a temporary variable):

```javascript
let a = 5;
let b = 10;

// Swap using a temporary variable
let temp = a;
a = b;
b = temp;

console.log(a, b); // Output: 10 5
```

Example (without a temporary variable using destructuring):

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b); // Output: 10 5
```


### 3-44 Who is the tallest? Find the max number in an array

To find the maximum number in an array, you can use the `Math.max()` function or the spread operator.

Example using `Math.max()`:

```javascript
const heights = [170, 185, 160, 175, 190];
const tallest = Math.max(...heights);

console.log(tallest); // Output: 190
```

### 3-45 Reverse a string and Reverse words in a sentence

You can reverse a string by splitting it into an array of characters, then using the `reverse()` method and finally joining the characters back into a string. To reverse the words in a sentence, you can split the sentence into an array of words, reverse the array, and join the words back into a sentence.

Example for reversing a string:

```javascript
const str = 'Hello, world!';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); // Output: '!dlrow ,olleH'
```

Example for reversing words in a sentence:

```javascript
const sentence = 'This is a sample sentence';
const reversedSentence = sentence.split(' ').reverse().join(' ');

console.log(reversedSentence); // Output: 'sentence sample a is This'
```

### 3-46 (advanced) Create a Fibonacci Series using a for loop

The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones. You can create it using a for loop.

Example:

```javascript
function fibonacciSeries(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

const fibSeries = fibonacciSeries(10);
console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### 3-47 isArray, includes, concat

#### isArray:
`isArray` is a method that checks if a given value is an array.

```javascript
function isArray(arr) {
  return Array.isArray(arr);
}

// Example usage:
console.log(isArray([1, 2, 3])); // true
console.log(isArray("hello")); // false
```

#### includes:
`includes` is a method that checks if a given array contains a specific element.

```javascript
function includesElement(arr, element) {
  return arr.includes(element);
}

// Example usage:
console.log(includesElement([1, 2, 3], 2)); // true
console.log(includesElement(["apple", "banana", "orange"], "pear")); // false
```

#### concat:
`concat` is a method that joins two or more arrays and returns a new array.

```javascript
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Example usage:
console.log(concatenateArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
```

### 3-48 Get part of an array and insert elements using slice, splice

#### slice:
`slice` is a method that returns a shallow copy of a portion of an array.

```javascript
function getSliceOfArray(arr, start, end) {
  return arr.slice(start, end);
}

// Example usage:
console.log(getSliceOfArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
```

#### splice:
`splice` is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
function insertElementsIntoArray(arr, index, ...elements) {
  arr.splice(index, 0, ...elements);
  return arr;
}

// Example usage:
console.log(insertElementsIntoArray([1, 2, 3, 4], 2, 10, 11)); // [1, 2, 10, 11, 3, 4]
```

### 3-49 Remove duplicate items from an array

To remove duplicate items from an array, you can use the `Set` object to create a unique set of elements, and then convert it back to an array.

```javascript
function removeDuplicatesFromArray(arr) {
  return Array.from(new Set(arr));
}

// Example usage:
console.log(removeDuplicatesFromArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

### 3-50 Write foo, bar, foobar if divisible by 3 or 5 or both

You can use a loop to iterate through the numbers and check their divisibility by 3 and 5.

```javascript
function printFooBar(numbers) {
  for (let num of numbers) {
    let output = "";
    if (num % 3 === 0) {
      output += "foo";
    }
    if (num % 5 === 0) {
      output += "bar";
    }
    console.log(output || num);
  }
}

// Example usage:
printFooBar([1, 2, 3, 4, 5, 6, 10, 15]);
/* Output:
1
2
foo
4
bar
foo
bar
foobar
*/
```

### 3-51 Use add and multiplication to calculate wood requirements

Let's assume you have two wood requirements: one for making tables and another for making chairs. You can use addition and multiplication to calculate the total wood requirements.

```javascript
function calculateWoodRequirements(numTables, numChairs, woodPerTable, woodPerChair) {
  const totalWoodForTables = numTables * woodPerTable;
  const totalWoodForChairs = numChairs * woodPerChair;
  const totalWoodRequired = totalWoodForTables + totalWoodForChairs;
  return totalWoodRequired;
}

// Example usage:
console.log(calculateWoodRequirements(5, 10, 10, 5)); // 125 (5 tables * 10 wood + 10 chairs * 5 wood = 50 + 50 = 100)
```
### 3-52 Find the cheapest phone from an array of phone objects

Assuming you have an array of phone objects with a `name` and `price` property, you can find the cheapest phone by iterating through the array and comparing the prices.

```javascript
function findCheapestPhone(phones) {
  let cheapestPhone = phones[0];
  for (let i = 1; i < phones.length; i++) {
    if (phones[i].price < cheapestPhone.price) {
      cheapestPhone = phones[i];
    }
  }
  return cheapestPhone;
}

// Example usage:
const phones = [
  { name: "Phone A", price: 500 },
  { name: "Phone B", price: 300 },
  { name: "Phone C", price: 700 },
];
console.log(findCheapestPhone(phones)); // { name: "Phone B", price: 300 }
```

### 3-52 Calculate the total cost of the products in a shopping cart

Assuming you have an array of product objects with `name` and `price` properties, you can calculate the total cost of the products in the shopping cart by summing up the prices.

```javascript
function calculateTotalCost(cart) {
  let totalCost = 0;
  for (let product of cart) {
    totalCost += product.price;
  }
  return totalCost;
}

// Example usage:
const shoppingCart = [
  { name: "Product A", price: 10 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 30 },
];
console.log(calculateTotalCost(shoppingCart)); // 60 (10 + 20 + 30)
```

### 3-53 (advanced) Multi-layer discount price calculation

In this task, you can calculate the final price of a product after applying multiple layers of discounts.

```javascript
function calculateDiscountedPrice(basePrice, discounts) {
  let finalPrice = basePrice;
  for (let discount of discounts) {
    if (discount.type === "percentage") {
      finalPrice -= (discount.value / 100) * finalPrice;
    } else if (discount.type === "fixed") {
      finalPrice -= discount.value;
    }
  }
  return finalPrice;
}

// Example usage:
const basePrice = 100;
const discounts = [
  { type: "percentage", value: 10 }, // 10% discount
  { type: "fixed", value: 20 }, // $20 discount
];
console.log(calculateDiscountedPrice(basePrice, discounts)); // 70 (100 - 10% - $20)
```

### 3-54 Handle unexpected function input parameter error

To handle unexpected function input parameter errors, you can use conditional statements

