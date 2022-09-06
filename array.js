//Merge Sorted Array----------------------------------------------------------------
// let merge = function (nums1, m, nums2, n) {
//   let first = m - 1;
//   let second = n - 1;
//   let i = m + n - 1;

//   while (second >= 0) {
//     let firstValue = nums1[first];
//     let secondValue = nums2[second];

//     if (firstValue > secondValue) {
//       nums1[i] = firstValue;
//       i--;
//       first--;
//     } else {
//       nums1[i] = secondValue;
//       i--;
//       second--;
//     }
//   }
//   console.log("🚀 ~ file: index.js ~ line 152 ~ merge ~ nums1", nums1);
//   return nums1;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 155 ~ merge ~ merge",
//   merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6, 7, 8, 9], 3)
// );

// let merge = function (nums1, m, nums2, n) {

//   console.log("🚀 ~ file: index.js ~ line 152 ~ merge ~ nums1", nums1);
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 155 ~ merge ~ merge",
//   merge([1, 2, 3], 3, [2, 5, 6, 7, 8, 9], 3)
// );

//counting word in arr ----------------------------------------------------------------
// const samorukov = (str) => {
//     const arr = str.split("");

//     const setToArr = [...new Set(arr)];

//     const result = setToArr.map(
//       (el) => `${el}: ${arr.filter((element) => element === el).length}`
//     );
//     return result;
//   };
//   console.log(
//     "🚀 ~ file: index.js ~ line 38 ~ samorukov ~ samorukov",
//     samorukov(" hello world ")
//   );

// ---------------two sum-----------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// let twoSum = function (nums, target) {
//   const numsIndexes = {};

//   for (let i = 0; i < nums.length; i += 1) {
//     let currentDifference = target - nums[i];

//     if (
//       numsIndexes[currentDifference] !== undefined &&
//       numsIndexes[currentDifference] !== i
//     ) {
//       return [i, numsIndexes[currentDifference]];
//     } else {
//       numsIndexes[nums[i]] = i;
//     }
//   }
// };

// console.log(twoSum([2, 15, 7, 11], 9));

//------------------------------------------------------------------------------
// const arr1 = ["hello", "vtb", "mix", "bannana"];
// const arr2 = ["dfdasf", "vtb", "bannana", "wosdfsrld"];

// const func = (arr1, arr2) => {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.find((curArr) => arr1[i] === curArr)) {
//       result.push(arr1[i]);
//     }
//   }

//   return result;
// };

// console.log(func(arr1, arr2)); //[ 'vtb' ]

//HR countingSort------------------------------------------------------------

// function countingSort(arr) {
//   const counts = []
//   for(let i = 0; i < 100; i++) {
//       counts[i] = 0;
//   }
//   for(let i = 0; i < arr.length; i++) {
//       counts[arr[i]]++;
//   }
//   return counts
// }

// console.log(
//   "🚀 ~ file: array.js ~ line 103 ~ countingSort ~ countingSort(arr)",
//   countingSort([
//     63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75,
//     52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37,
//     97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84,
//     60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96,
//     7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6,
//     5, 24, 49, 82,
//   ])
// );
//2 0 1 0 0 1 1 1 1 0 0 1 3 2 2 0 4 4 1 1 0 0 0 0 3 0 0 1 0 1 2 0 1 2 2 3 0 2 0 0 1 0 1 1 0 0 1 1 0 2 0 0 1 1 1 0 1 0 1 1 2 3 0 1 2 0 1 2 1 1 4 1 0 1 1 3 0 0 2 1 2 3 2 2 2 0 0 1 0 0 0 0 0 0 2 0 1 3 1 0

//leetcode ----------------------------------------------------------------

// let climbStairs = function (n) {
//   const arr = [1, 1];
//   if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       arr[i] = arr[i - 1] + arr[i - 2];
//     }
//   }
//   return arr.pop();
// };
// console.log("🚀 ~ file: array.js ~ line 133 ~ climbStairs ~ climbStairs", climbStairs(5))
//for(let i = 2; i <= n ; i++){
// ary[i] = ary[i-1] + ary[i-2];

//when i = 2
// ary[2] = ary[2-1] + ary[2-2]
//=> ary[2] = ary[1] + ary[0]
//=> ie new element = sum of previous two elements
// ary = [1,1,2]
//when i - 3
//ary[3] = ary[3-1] + ary[3-2]
//=> ary[3] = ary[2] + ary[1]
// ary = [1,1,2,3]
//etc
// }

//binary search --------------------------------

// let search = function (nums, target) {
//   let result;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       result = i;
//     }
//   }
//   return (result === 0 || result) ? result : -1;
// };
// console.log(
//   "🚀 ~ file: array.js ~ line 157 ~ search ~ search",
//   search([5], 5)
// );

// cw All inclusive ----------------------------------------------------------------
// function containAllRots(s, arr) {
//   // your code
// //   for (let i = 0; i < s.length; i++)
// //     if (arr.indexOf(s.slice(i) + s.slice(0, i)) === -1) return false;
// //   return true;
//     return arr.find(el => el === s) ? true : false;
// }
// console.log(
//   containAllRots("Ajylvpyd", [
//     "Ajylvpy",
//     "ylvpyAj",
//     "jylvpyA",
//     "lvpyAjy",
//     "pyAjylv",
//     "vpyAjyl",
//     "ipywee",
//   ])
// );
// console.log(
//   containAllRots("bsjqd", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
// );

//cw Two to One ----------------------------------------------------------------

// function longest(s1, s2) {
//   // your code
//   const newArrFromString = [...s1, ...s2].sort();
//   return Array.from(new Set(newArrFromString)).join("");
// }

// function longest(s1, s2) {
//   // your code
//   let newStr = s1 + s2;
//   let sortedStrArr = newStr.split("").sort();

//   return sortedStrArr
//     .filter((value, index, self) => {
//       return self.indexOf(value) === index;
//     })
//     .join("");
// }

//cw remove duplicates ------------------------------

// function distinct(a) {
//   let result = [];
//   a.map((x) => {
//     if (!result.includes(x)) {
//       result.push(x);
//     }
//   });
//   return result;
// }

// // function distinct(a) {
// //   return [...new Set(a)];
// // }
// // const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);
// console.log(
//   "🚀 ~ file: array.js ~ line 210 ~ distinct ~ distinct(a)",
//   distinct([1, 2, 1, 2, 3, 4, 5, 5, 6])
// );

// plusMinus------------------------------------------------------------------------------
// function plusMinus(arr) {
//   // Write your code here
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;

//   arr.forEach((el) => {
//     if (el > 0) {
//       positive++;
//     }
//     if (el < 0) {
//       negative++;
//     }
//     if (el === 0) {
//       zero++;
//     }
//   });
//   console.log((positive / arr.length).toFixed(6));
//   console.log((negative / arr.length).toFixed(6));
//   console.log((zero / arr.length).toFixed(6));
// }
// console.log(
//   "🚀 ~ file: array.js ~ line 229 ~ plusMinus ~ plusMinus(arr)",
//   plusMinus([-4, 3, -9, 0, 4, 1])
// );

//miniMaxSum------------------------------------------------------------------------------------------------
// function miniMaxSum(arr) {
//   // Write your code here
//   const sortedArr = arr.sort((a, b) => a - b);
//   let maxSum = 0;
//   let minSum = 0;

//   for (let i = 1; i < sortedArr.length; i++) {
//     maxSum += sortedArr[i];
//   }
//   for (let i = 0; i < sortedArr.length - 1; i++) {
//     minSum += sortedArr[i];
//   }
//   console.log(minSum, maxSum);
// }
// console.log(
//   "🚀 ~ file: array.js ~ line 259 ~ miniMaxSum ~ miniMaxSum(arr)",
//   miniMaxSum([1, 2, 3, 4, 5])
// );

//matchingStrings   ----------------------------------------------------------------
// function matchingStrings(strings, queries) {
//   // Write your code here
//   const countingMatches = {};
//   let count = 1;
//   const result = [];

//   for (let i = 0; i < strings.length; i++) {
//     const el = strings[i];
//     if (!countingMatches[el]) {
//       countingMatches[el] = count;
//     } else {
//       countingMatches[el]++;
//     }
//   }
//   const keys = Object.keys(countingMatches);

//   for (let i = 0; i < queries.length; i++) {
//     const el = queries[i];

//     if (keys.indexOf(el) !== -1) {
//       result.push(countingMatches[el]);
//     } else {
//       result.push(0);
//     }
//   }
//   return result;
// }
// console.log(
//   "🚀 ~ file: array.js ~ line 278 ~ matchingStrings ~ matchingStrings(strings, queries)",
//   matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
// );

//--find uniqueElement in array----------------------------------------------------------------
// function lonelyinteger(arr) {
//   // Write your code hered
//   let uniqueElement;
//   arr.forEach((element) => {
//     if (arr.indexOf(element) === arr.lastIndexOf(element)) {
//       uniqueElement = element;
//     }
//   });
//   return uniqueElement;
// }
// console.log(
//   "🚀 ~ file: array.js ~ line 311 ~ lonelyinteger ~ lonelyinteger(a)",
//   lonelyinteger([1, 2, 1, 2, 3, 4, 4, 5, 5])
// );

//sum diagonal elements in array----------------------------------------------------------------------
function diagonalDifference(arr) {
  // Write your code here
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // finding the sum of primary diagonal
      if (i === j) {
        d1 += arr[i][j];
      }
      // finding the sum of secondary diagonal
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}
console.log(
  "🚀 ~ file: array.js ~ line 328 ~ diagonalDifference ~ diagonalDifference(arr)",
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
