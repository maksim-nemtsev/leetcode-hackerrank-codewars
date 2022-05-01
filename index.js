//Valid Parentheses----------------------------------------------------------------
// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;
//   const stack = [];
//   const map = new Map([
//     ["(", ")"],
//     ["{", "}"],
//     ["[", "]"],
//   ]);
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       stack.push(map.get(s[i]));
//     } else if (s[i] !== stack.pop()) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };
// console.log(isValid(")("));

// var isValid = function (s) {

// };
// console.log(isValid("(()))"));

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
//   romanToInt('IXI')
// );

// const isValid = (s) => {

// };
// console.log("🚀 ~ file: index.js ~ line 81 ~ isValid ~ isValid", isValid("IV"));

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

// var removeDuplicates = function (nums) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 65 ~ removeDuplicates ~ removeDuplicates",
//   removeDuplicates([1, 1, 2])
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

//implement strStr() ----------------------------------------------------------------

// const strStr = function (haystack, needle) {
//   if (!needle) return 0;
//   if (needle === null || haystack === null) return -1;
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (needle === haystack.substring(i, i + needle.length)) {
//       return i;
//     }
//   }

//   return -1;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 113 ~ strStr ~ strStr",
//   strStr("mississippi", "issip")
// );

// const strStr = function (haystack, needle) {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 113 ~ strStr ~ strStr",
//   strStr("mississippi", "issip")
// );
