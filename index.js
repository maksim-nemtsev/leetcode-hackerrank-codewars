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

// Maximum Subarray----------------------------------------------------------------
// const maxSubArray = function(nums) {
// let result = nums[0];//6
// for(let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     result = Math.max(nums[i], result)
// }
// return result;
// };
// console.log("maxSubArray", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// const maxSubArray = function(nums) {

// };
// console.log("maxSubArray", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

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

// inorderTraversal binary search
// var inorderTraversal = function (root) {
//   let node = root;
//   const result = [];

//   while (node) {
//     if (!node.left) {
//       result.push(node.val);
//       node = node.right;
//     } else {
//       const predecessor = findPredecessor(node);
//       if (predecessor.right === node) {
//         predecessor.right = null;
//         result.push(node.val);
//         node = node.right;
//       } else {
//         predecessor.right = node;
//         node = node.left;
//       }
//     }
//   }
//   return result;
// };
// function findPredecessor(root) {
//   let node = root.left;
//   while (node.right && node.right !== root) {
//     node = node.right;
//   }
//   return node;
// }

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