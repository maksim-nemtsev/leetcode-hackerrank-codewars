//---------------------------------------------------------
// function solve(s) {
//   let upCount = 0;
//   let lowCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     s[i] === s[i].toLowerCase() ? lowCount++ : upCount++;
//   }
//   return lowCount >= upCount ? s.toLowerCase() : s.toUpperCase();
// }
// console.log(solve("CODe"));

// function solve(s) {

// }
// console.log(solve("CODe"));

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
// console.log(isValid("(())"));

//implement strStr() ----------------------------------------------------------------

// const strStr = function (haystack, needle) {
//   if (needle === ') return 0;
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

// max string ----------------------------------------------------------------
// const maxString = (str) => {
//   const cashe = {};
//   const arr = str.toLowerCase().split("");

//   for (const c of arr) {
//     if (!cashe[c]) {
//       cashe[c] = 1;
//     } else {
//       cashe[c]++;
//     }
//   }
//   const max = Math.max(...Object.values(cashe));

//   for (const key in cashe) {
//     if (cashe[key] === max) {
//       return key;
//     }
//   }
//   return "";
// };
// console.log(maxString("abcdddd"));


// ---------------------------------------------------
// const encrypt = (message) => {
//   let cipher = "";
//   for (let i = 0; i < message.length; i += 2) {
//     if (message.length % 2 === 0) {
//       cipher += `${message[i + 1]}${message[i]}`;
//     }
//     if (message.length % 2 !== 0) {
//       if (message[i + 1] !== undefined) {
//         cipher += `${message[i + 1]}${message[i]}`;
//       } else cipher += message[i];
//     }
//   }

//   return cipher;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 335 ~ encrypt ~ encrypt",
//   encrypt("abcdef")
// );

//longestCommonPrefix----------------------------------------------------------------
// const longestCommonPrefix = (strs) => {
//     if (!strs[0] || strs.length === 1) return strs[0] || "";
//     let i = 0;
  
//     while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) i++;
//     return strs[0].substr(0, i);
//   };
//   console.log("result:", longestCommonPrefix(["flow"]));