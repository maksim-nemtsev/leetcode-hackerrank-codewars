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
