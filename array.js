

//Merge Sorted Array----------------------------------------------------------------
// var merge = function (nums1, m, nums2, n) {
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

// var merge = function (nums1, m, nums2, n) {

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
// var twoSum = function (nums, target) {
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