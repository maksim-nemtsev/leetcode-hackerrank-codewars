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
// console.log(isValid(")("));

// Roman to Integer----------------------------------------------------------------
// const romanToInt = (s) => {
//   const romanMap = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
//   ]);
//   let result = 0,
//     current,
//     previous = 0;
//   for (const char of s.split("").reverse()) {
//     current = romanMap.get(char);
//     if (current >= previous) {
//       result += current;
//     } else {
//       result -= current;
//     }
//     previous = current;
//   }
//   return result;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 25 ~ romanToInt ~ romanToInt",
//   romanToInt('IXI')
// );

// const isValid = (s) => {

// }
// console.log("🚀 ~ file: index.js ~ line 81 ~ isValid ~ isValid", isValid('IV'))

