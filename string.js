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

//leetcode ----------------------------------------------------------------

//cipher code ----------------------------------------------------------------

// function cipherRot13(str, amount) {
//   if (amount < 0) {
//     return cipherRot13(str, amount + 26);
//   }

//   // Make an output variable
//   let output = "";

//   // Go through each character
//   for (let i = 0; i < str.length; i++) {
//     // Get the character we'll be appending
//     let c = str[i];

//     // If it's a letter...
//     if (c.match(/[a-z]/i)) {
//       // Get its code
//       let code = str.charCodeAt(i);

//       // Uppercase letters
//       if (code >= 65 && code <= 90) {
//         c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
//       }

//       // Lowercase letters
//       else if (code >= 97 && code <= 122) {
//         c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
//       }
//     }

//     // Append
//     output += c;
//   }

//   // All done!
//   return output;
// }
// console.log(
//   "🚀 ~ file: string.js ~ line 129 ~ cipherRot13 ~ cipherRot13",
//   cipherRot13("middle-Outz", 12)
// );

// grid challenge ----------------------------------------------------

// function gridChallenge(grid) {
//   let cur = [];

//   for (let i = 0; i < grid.length; i++) {
//     const el = grid[i];
//     const text = el.split("").sort();
//     cur.push(text);
//   }

//   let column = cur[0].length;

//   for (let j = 0; j < cur.length - 1; j++) {
//     for (let z = 0; z < column; z++) {
//       if (cur[j][z] > cur[j + 1][z]) {
//         return "NO";
//       }
//     }
//   }
//   return "YES";
// }

// console.log(
//   "🚀 ~ file: string.js ~ line 171 ~ gridChallenge ~ gridChallenge",
//   gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"])
// );

// super digit ----------------------------------------------------------------

// function superDigit(n, k) {
//         let strOfNumber = '';
//     while(k > 0) {
//         strOfNumber += String(n);
//         k--;
//     }

//     for (let sum = 0, i = 0, n = String(strOfNumber); i < strOfNumber.length; i++) {
//         sum += Number(n[i]);

//     }

// }
// console.log("🚀 ~ file: string.js ~ line 199 ~ superDigit ~ superDigit", superDigit(9875, 4))
// function superDigit(n, k) {
//     let strOfNumber = '';
//     while(k > 0) {
//         strOfNumber += String(n);
//         k--;
//     }
//     let arr = strOfNumber.split('');
//     let mapNum = arr.map(el => +el);
//     let sum = mapNum.reduce((a, b) => a + b, 0);
//     return (sum - 1) % 9 + 1;
// }
// console.log("🚀 ~ file: string.js ~ line 199 ~ superDigit ~ superDigit", superDigit(9875, 4))

// Isograms ----------------------------------------------------------------
// function isIsogram(str) {
//   //...
//   let arr = str.toLowerCase().split("");
//   let unique = [...new Set(arr)];

//   return JSON.stringify(arr) == JSON.stringify(unique);
// }
// console.log(
//   "🚀 ~ file: string.js ~ line 227 ~ isIsogram ~ isIsogram(str)",
//   isIsogram("Dermatoglyphics")
// );

// alphabetical addition --------------------------------

// const addLetters = (...letters) =>
//   String.fromCharCode(
//     (letters.reduce((sum, value) => sum + value.charCodeAt() - 96, 25) % 26) +
//       97
//   );
// console.log(addLetters('a', 'b', 'c'));

///------------ time conversions --------------------
// function timeConversion(s) {
//     // Write your code here
//     let hours = s.slice(0, 2);
//     let minutes = s.slice(3, 5);
//     let second = s.slice(6, 8);
//     let modifier = s.slice(-2);

//     if(hours === '12') {
//         hours = '00'
//     }
//     if(modifier === 'PM') {
//         hours = parseInt(hours, 10) + 12;
//     }
//     return `${hours}:${minutes}:${second}`;

// }
// console.log("🚀 ~ PM", timeConversion('12:01:01PM'))//'12:01:01'
// console.log("🚀 ~ AM", timeConversion('12:01:01AM'))//'00:01:01'

// plangrams ------------------------------------------------------------

// function pangrams(s) {
//   let hash = {};
//   s = s.toLowerCase();
//   for(let i = 0; i < s.length; i++) {
//     if(s[i] !== ' ') hash[s[i]] = s[i];
//   }
//   return Object.keys(hash).length === 26 ? 'pangram' : 'not pangram';
// }
// console.log(
//   "🚀 ~ file: string.js ~ line 269 ~ pangrams ~ pangrams(s)",
//   pangrams("We promptly judged antique ivory buckles for the next prize")
// ); //pangram
// console.log(
//   "🚀 ~ file: string.js ~ line 269 ~ pangrams ~ pangrams(s)",
//   pangrams("We promptly judged antique ivory buckles for the prize")
// ); // not pangram
//-------------------------------------------------------------------------------
// write a function that takes an array of strings.
// Returns a new string containing all vowels.
// const arrOfStr = ["aerotufilo", "max", "mix", "mx", "aeoui"];

// const takeStrWithAllVowels = (arr) => {
//   let result = [];
//   let arrWithCountAllVowels = [];
//   arr.forEach((str) => {
//     let objOfVowels = {
//       a: 1,
//       e: 1,
//       i: 1,
//       o: 1,
//       u: 1,
//     };
//     let tmp = str.split("");
//     tmp.forEach((char) => {
//       if (objOfVowels[char]) {
//         objOfVowels[char]++;
//       }
//     });
//     let tmpArr = Object.values(objOfVowels);
//     arrWithCountAllVowels.push(tmpArr);
//   });
//   arrWithCountAllVowels.forEach((arrOfCount, idx) => {
//     if (arrOfCount.indexOf(1) === -1) {
//       console.log("contains vowel");
//       result.push(arr[idx]);
//     }
//   });
//   return result;
// };
// console.log(
//   "🚀 ~ file: string.js:301 ~ takeStrWithAllVowels ~ takeStrWithAllVowels:",
//   takeStrWithAllVowels(arrOfStr)
// );
//--------------------------------------------------------------------------------------------------
