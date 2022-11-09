// ? Calculate Factorial:
function fact(num) {
  // Base Case
  if (num == 1) return 1;

  return num * fact(num - 1);
}
fact(4); // 24

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Reverse String:
function reverseString(str) {
  if (str.length === 1) return str;

  return reverseString(str.substring(1)) + str.charAt(0);
}
reverseString('hello'); // "olleh"

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Palidroms => Are these unique words, where we can spell the same word forward and backword.
function isPalidrom(str) {
  // Base Case
  if (str.length == 1 || str.length == 0) return true;

  if (str[0] == str[str.length - 1]) {
    return isPalidrom(str.substring(1, str.length - 1));
  }

  return false;
}
isPalidrom('kayak'); // true

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Decimal to Binary
function decimalToBinary(num) {
  // Base Case
  if (num == 0) return 0;

  return (num % 2) + 10 * decimalToBinary(Math.floor(num / 2));
}
decimalToBinary(233); // 11101001

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Sum of natural number
function sumUp(num) {
  if (num <= 1) return 1;

  return num + sumUp(num - 1);
}
sumUp(10); // 55

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Binary Search using recursion
function recursiveBinarySearch(list, target, start = 0, end = list.length - 1) {
  // Base-Case => If the item isn't exist
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2),
    guess = list[mid];

  if (guess === target) return mid;

  if (guess > target)
    return recursiveBinarySearch(list, target, start, mid - 1);

  if (guess < target) return recursiveBinarySearch(list, target, mid + 1);
}
recursiveBinarySearch([1, 3, 5, 7, 9], 3); // 1

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Fibonacci Series
function fib(num) {
  // Base Case
  if (num == 1 || num == 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
fib(8); // 21

// Todo: Optimize Fibonacci Series Using Memoization
function optimizedFib(num) {
  // Base Case
  if (num == 1 || num == 2) return 1;

  // cach = {3: 2, 4: 3, 5: 5, ..etc}
  const cach = {};
  if (cach[num]) return num;

  cach[num] = fib(num - 1) + fib(num - 2);

  return cach[num];
}
optimizedFib(8); // 21

// -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// ? Calculate Power
// Todo: Using For Loop
// Time Complexity: O(n)
function pow1(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;

  return result;
}
pow1(2, 5);

// Todo: Using Recursion
function pow2(x, n) {
  // Base Case
  if (n == 1) return x;

  return x * pow2(x, n - 1);
}
pow2(2, 5);

// Todo: Optimiziation By Using "Divide & Concer"
// We improve time complexity from "O(n) to O(log(n))"
function pow3(x, n) {
  // Base Case
  if (n == 1) return x;

  let res = pow3(x, Math.floor(n / 2));
  if (n % 2 == 0) {
    return res * res;
  } else {
    return res * res * x;
  }
}
pow3(2, 5);
