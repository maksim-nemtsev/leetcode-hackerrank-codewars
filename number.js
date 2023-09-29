// Roman to Integer----------------------------------------------------------------
// const romanToInt = (s) => {
// const romanMap = new Map([
//   ['I', 1],
//   ['V', 5],
//   ['X', 10],
//   ['L', 50],
//   ['C', 100],
//   ['D', 500],
//   ['M', 1000],
// ]);
// let result = 0,
//   current,
//   previous = 0;
// for (const char of s.split("").reverse()) {
//   current = romanMap.get(char);
//   if (current >= previous) {
//     result += current;
//   } else {
//     result -= current;
//   }
//   previous = current;
// }
// return result;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 25 ~ romanToInt ~ romanToInt",
//   romanToInt('IVX')
// );
// const isValid = (s) => {
// };
// console.log("🚀 ~ file: index.js ~ line 81 ~ isValid ~ isValid", isValid("IVX"));

//removeDuplicates -----------------------------------------------------------------------
// var removeDuplicates = function (nums) {
//   let i = 0;
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[j] === nums[i]) {
//       nums.splice(j, 1);
//       j--;
//     } else i = j;
//   }
//   return nums.length;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 65 ~ removeDuplicates ~ removeDuplicates",
//   removeDuplicates([1, 1, 2])
// );

// var removeDuplicates = function (head) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 65 ~ removeDuplicates ~ removeDuplicates",
//   removeDuplicates([1, 1, 2, 3, 3])
// );

//remove element ----------------------------------------------------------------
// const removeElement = function (nums, val) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//     }
//   }
//   return nums;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 88 ~ removeElement ~ removeElement",
//   removeElement([3, 2, 2, 3], 3)
// );
// const removeElement = function (nums, val) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 88 ~ removeElement ~ removeElement",
//   removeElement([3, 2, 2, 3], 3)
// );

// const strStr = function (haystack, needle) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 113 ~ strStr ~ strStr",
//   strStr("mississippi", "issip")
// );

//climbStairs ----------------------------------------------------------------
// var climbStairs = function (n) {
//   if (n === 1 || n === 0) return 1; // our base cases

//   let first = 1;
//   let second = 2;

//   for (let i = 3; i <= n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return second;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 202 ~ climbStairs ~ climbStairs",
//   climbStairs(4)
// );

// majority Element----------------------------------------------------------------
// var majorityElement = function (nums) {
//   const counts = {};
//   nums.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
//   });
//   const max = Math.max(...Object.values(counts));
//   for (const key in counts) {
//     if (counts[key] === max) {
//       return key;
//     }
//   }
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 238 ~ majorityElement",
//   majorityElement([3, 2, 3])
// );

// var majorityElement = function (nums) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 238 ~ majorityElement",
//   majorityElement([3, 2, 3])
// );

//isHappy number ----------------------------------------------------------------
// var isHappy = function (n) {
//   var map = {};
//   var tmp = 0;

//   if (n < 1) return false;

//   while (n !== 1 && !map[n]) {
//     map[n] = true;
//     tmp = 0;

//     while (n > 0) {
//       tmp += Math.pow(n % 10, 2);
//       n = Math.floor(n / 10);
//     }

//     n = tmp;
//   }
//   return n === 1;
// };
// console.log("🚀 ~ file: index.js ~ line 267 ~ isHappy ~ isHappy", isHappy(19));

//Count vowels--------------------------------------------------------

// function solve(s) {
//   let count = 0;
//   let result = 0;
//   let tmp = 0;
//   let vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < s.length; i++) {
//   if (vowels.includes(s[i])) {
//     count++;
//     tmp = count;
//     if (result < tmp) {
//       result = tmp;
//     }
//   } else if (!vowels.includes(s[i])) {
//     count = 0;
//     tmp = count;
//   }
// }
// }

// console.log(solve("suoidea"));

//cw Deodorant Evaporator------------------------------

// function evaporator(content, evap_per_day, threshold) {
//   let days = 0,
//     percentage = 100;

//   while (percentage > threshold) {
//     percentage -= (percentage * evap_per_day) / 100;
//     days++;
//   }
//   return days;
// }
// //evaporator(10, 10, 5) -> 29
// console.log(evaporator(10, 10, 5));

// cw
// function repeats(arr) {
//   return arr
//     .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
//     .reduce((a, b) => a + b, 0);
// }
// console.log(
//   "🚀 ~ file: number.js ~ line 195 ~ repeats ~ repeats(arr)",
//   repeats([1, 2, 3, 12, 3, 4, 5])
// );

// Number(42).toString(2);

// reverse binary integer and return 32 bits integer----------------------------------------------------------------
//You will be given a list of 32 bit unsigned integers.
// Flip all the bits 1 -> 0 ( and ) 0 -> 1 and return the result as an unsigned integer.
// function flippingBits(n) {
//   return ~n >>> 0;
// }
// console.log(
//   "🚀 ~ file: number.js ~ line 208 ~ flippingBits ~ flippingBits(n)",
//   flippingBits(3)
// );
//---------------------------------------------------------------->
//----------------------test tasks-------------------------------->
// Multiples of 3 and 5;
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// const multiplyByNumber = (num: number): number => {
//   //1 solution----------------------------------------------------------------
//   let result: number = 0;
//   for (let i: number = 0; i < num; i++) {
//     result += i % 3 === 0 || i % 5 === 0 ? i : 0;
//   }
//   return result;
//2 solution----------------------------------------------------------------
//   const fiveCoFactor = Math.floor((num - 1) / 5);
//   const threeCoFactor = Math.floor((num - 1) / 3);
//   const fifteenCoFactor = Math.floor((num - 1) / 15);
//   const fiveSum = (5 * fiveCoFactor * (fiveCoFactor + 1)) / 2;
//   const threeSum = (3 * threeCoFactor * (threeCoFactor + 1)) / 2;
//   const fifteenSum = (15 * fifteenCoFactor * (fifteenCoFactor + 1)) / 2;
//   return fiveSum + threeSum - fifteenSum;
//3 solution---------------------------------------------------------------
//   if (num <= 0) return 0;
//   return [...Array(num)]
//     .map((_, i) => i)
//     .filter((_, index) => index % 3 === 0 || index % 5 === 0)
//     .reduce((a, b) => a + b, 0);
// };
// console.log(
//   "🚀 ~ file: numbers.ts:6 ~ multiplyByNumber ~ multiplyByNumber:",
//   multiplyByNumber(20)
// ); // should return 78 //

//------------------------------------------------------------------------------
// Черепашке нужно забраться на вершину холма.
// Расстояние от подножия холма до его вершины - 100м.
// Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз.
// На какие сутки черепашка залезет на столб

// const ninjaTurtle = (
//   totalDistance: number,
//   climbDistance: number,
//   rollbackDistance: number
// ) => {
//   let days = 0;
//   while (totalDistance > 0) {
//     days++;
//     totalDistance -= climbDistance;
//     if (totalDistance >= 0) {
//       totalDistance += rollbackDistance;
//     }
//   }
//   return days;
// };
// console.log(
//   "🚀 ~ file: numbers.ts:50 ~ ninzaTurtle ~ ninzaTurtle:",
//   ninjaTurtle(100, 50, 30)
// );
//------------------------------------------------------------------------------------------------
/*
В комнате находится человек. 
Через какое-то время в комнату заходит еще один человек и здоровается с первым. 
Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. 
Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. 
Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. 
Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ. 
Решить на javascript
*/
// const getHandshakesCount = (n: number): number => {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     count += i;
//   }
//   return count - n;
// };

// console.log(getHandshakesCount(10)); // 45

//<----------------------------------------------------------------|
//<----------------------test tasks--------------------------------|
