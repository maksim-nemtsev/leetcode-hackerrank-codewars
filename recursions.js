// Напишите рекурсивную функцию для вычисления факториала числа.
// const num1 = 0;
// const num2 = 1;
// const num3 = 3;
// const factorial = (num) => {
//   return num ? num * factorial(num - 1) : 1;
// };
// console.log(
//   "🚀 ~ file: recursions.js:13 ~ functiorial ~ functiorial:",
//   factorial(num1)
// );
// console.log(
//   "🚀 ~ file: recursions.js:13 ~ functiorial ~ functiorial:",
//   factorial(num2)
// );
// console.log(
//   "🚀 ~ file: recursions.js:13 ~ functiorial ~ functiorial:",
//   factorial(num3)
// );

//------------------------------------------------------------------------------
// Реализуйте функцию для поиска глубины вложенности объекта (количество вложенных объектов внутри объекта).
// const obj = { a: { c: { e: {} } } };

// let result = 0;
// const countOfDepth = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       result++;
//       countOfDepth(obj[key]);
//     }
//   }
//   return result;
// };
// console.log(
//   "🚀 ~ file: recursions.js:32 ~ countOfDepth ~ countOfDepth:",
//   countOfDepth(obj)
// );
// Напишите рекурсивную функцию для генерации всех перестановок заданной строки.
// function* generatePermutations(str) {
//   if (str.length === 1) {
//     yield str;
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       const currentChar = str[i];
//       const restOfStr = str.slice(0, i) + str.slice(i + 1);

//       for (const permutation of generatePermutations(restOfStr)) {
//         yield currentChar + permutation;
//       }
//     }
//   }
// }

// const input = "abc";

// for (const perm of generatePermutations(input)) {
//   console.log(perm);
// }
// Реализуйте функцию для обхода DOM-дерева и поиска всех элементов с заданным классом, используя рекурсию.
// Создайте рекурсивную функцию для вычисления чисел Фибоначчи с мемоизацией (запоминанием уже вычисленных значений).

//------------------------------------------------------------------------------
// Создайте рекурсивную функцию для поиска наибольшего числа во вложенных массивах.
