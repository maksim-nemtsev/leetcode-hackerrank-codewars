// let time1 = 1000;
// let time2 = 6000;
// let f = () => {
//   console.log(1);
// };

// function execute(f) {
//   setTimeout(f, 3000);
// }

// execute(f); // что выведет в консоль и почему
// f = () => {
//   console.log(3);
// };
// execute(f); // что выведет в консоль и почему

// //---------------interview questions ----------------------------------------------------------------

// //IIFE -------------------------------
// (function() {
//     f();

//     f = function() {
//         console.log(1);
//     }
// })()

// function f() {
//     console.log(2)
// }

// f();

// // object -------------------------------
// const obj = {
//     name: 'John',
//     getName() {
//       return this.name;
//     }
//   };

//   const name1 = obj.getName();
//   const getName = obj.getName;
//   const name2 = getName();
//   console.log(`${name1} ${name2}`); // ?

// // create a new method in String.prototype-----------------------------------------
// console.log("hello". customRepeat(3)); // “hellohellohello”

// Есть список элементов button, на которые навешен обработчик события ‘click’
// Что попадет в консоль, если пользователь нажмет первую и последнюю кнопку в списке? Аргументируйте свой ответ.
// const nodes = document.getElementsByTagName('button');

// for (var i = 0; i < nodes.length; i++) {
//        nodes[i].addEventListener('click', function() {
//       	console.log('You clicked element #' + i);
//        });
// }

// 5.	Что выведет в консоль следующий код? Аргументируйте свой ответ.

// function printme() {
//    console.log(1);
//    setTimeout(function() { console.log(2); }, 1000);
//    setTimeout(function() { console.log(3); }, 0);
//    console.log(4);
// }
// printme();

// // 7.	Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом:

// const carry =
//   (func) =>
//   (...args) =>
//     args.length >= func.length
//       ? func(...args)
//       : (...args2) => curried(...args, ...args2);

// const add = (a, b, c) => a + b + c;

// const curried = carry(add);

// console.log(curried(1)(2)(3));
// console.log(curried(1)(2, 3));
// console.log(curried(1)(2)(3));
// console.log(curried(1, 2)(3));

//pseudo lodash api string and object key --------------------------------
// const stringPath = "red.fruit.apple";
// const obj = {
//   red: {
//     fruit: {
//       apple: "apple",
//     },
//   },
// };

// const findNestedKeys = (path, obj) =>
//   path.split(`.`).reduce((nested, key) => {
//     console.log("🚀 ~ file: interview.js ~ line 93 ~ path.split ~ key", key);
//     console.log(
//       "🚀 ~ file: interview.js ~ line 93 ~ path.split ~ nested",
//       nested
//     );

//     return nested && nested[key];
//   }, obj);

// const get = (seq, obj) =>
//   seq.split(".").reduce((x, key) => (x || {})[key], obj);
// console.log(
//   "🚀 ~ file: interview.js ~ line 88 ~ get ~ get",
//   get(stringPath, obj)
// );
// console.log(
//   "🚀 ~ file: interview.js ~ line 89 ~ findNestedKeys ~ findNestedKeys",
//   findNestedKeys(stringPath, obj)
// );

// closure function increment ----------------------------------------------------------------

// const inc = () => {
//   inc.count = inc.count || 1;
//   return inc.count++;
// };
// console.log(inc());
// console.log(inc());
// console.log(inc());

// this and setTimeout ----------------------------------------------------------------

// const obj = {
//   a: 42,
//   say: function () {
//     setTimeout(function() {
//       console.log("this.a: " + this.a);
//     }, 1000);
//   },
// };
// console.log(obj.say());

// const obj = {
//   a: 42,
//   say: function () {
//     function helper() {
//       console.log("this.a: ", this.a);
//     }
//     setTimeout(helper.bind(this), 1000);
//   },
// };
// console.log(obj.say());

// bind ----------------------------------------------------------------

// const ex = (value, sum) => console.log(value + sum);
// const fx = ex.bind(null, 10);

// ex(12, 7);
// fx(7, 12);

// sort fruits by frequency ----------------------------------------------------------------

// const fruits = [
//   "bannana",
//   "grapefruit",
//   "orange",
//   "orange",
//   "coconat",
//   "bannana",
//   "bannana",
//   "coconat",
//   "coconat",
//   "coconat",
//   "coconat",
// ];

// const sortFruits = (arr) => {
//   const objFruits = arr.reduce((acc, val)=> {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {})
//   const keys = Object.keys(objFruits);
//   return keys.sort((a, b) => objFruits[b] - objFruits[a])
// };
// console.log(
//   "🚀 ~ file: interview.js ~ line 193 ~ sortFruits ~ sortFruits",
//   sortFruits(fruits)
// );

//multiplyByTwo ----------------------------------------------------------------
// const multiplyByTwo = (...args) => args.map((el) => el * el);
// console.log(
//   "🚀 ~ file: interview.js ~ line 190 ~ multiplyByTwo",
//   multiplyByTwo(2, 3)
// );

//carry ----------------------------------------------------------------
// // const sum = a => b => a + b;
// console.log(sum(1)(2));
// console.log(sum(3)(4));

// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// const calc = (cb) => (a) => (b) => cb(a, b);
// console.log(`calc ${sum} :`, calc(sum)(1)(2));
// console.log(`calc ${multiply} :`, calc(multiply)(1)(2));

// const myArray = [
//   { name: "width", value: 10 },
//   { name: "height", value: 20 },
//   { name: "position", value: 300 },
// ];
// const arrayToObject = (arr) => {
//   let result = {};
//   arr.forEach((item) => {
//     result[item.name] = item.value;
//   });
//   return result;
// };
// console.log(
//   "🚀 ~ file: interview.js ~ line 210 ~ arrayToObject ~ arrayToObject",
//   arrayToObject(myArray)
// );
// import axios from "axios";
// function getUrl(url, retries, timeout) {
//   let count = retries;
//   const intervalRunning = setInterval(() => {
//     if (count > 0) {
//       axios.get(url).then((response) => {
//         printData(response.data);
//         count--;
//       });
//     } else {
//       clearInterval(intervalRunning);
//     }
//   }, timeout);
// }

// function printData(data) {
//   console.log(data);
// }

// getUrl("https://jsonplaceholder.typicode.com/posts/1", 3, 5000);

// const daysCount = (dayPath, nightPath) => {
//   if (dayPath < nightPath) return "dayPath travel should be greater than night";

//   let days = 0;
//   let countingTheDayPath = 0;
//   let countingTheNigthPath = 0;

//   while (countingTheDayPath <= 100) {
//     days++;
//     countingTheDayPath = countingTheNigthPath + dayPath;
//     countingTheNigthPath = countingTheDayPath - nightPath;
//   }

//   return days;
// };
// console.log(
//   "🚀 ~ file: interview.js ~ line 258 ~ daysCount ~ daysCount",
//   daysCount(50, 30)
// );

// const handshakeCounting = (people) => {
//   if (people <= 0) return "need people for handshake";

//   let peopleCanShake = people - 1;
//   let count = 0.5 * peopleCanShake * (peopleCanShake + 1);
//   return count;
// };
// console.log(
//   "🚀 ~ file: interview.js ~ line 271 ~ handshakeCounting ~ handshakeCounting",
//   handshakeCounting(-10)
// );
// console.log(
//   "🚀 ~ file: interview.js ~ line 271 ~ handshakeCounting ~ handshakeCounting",
//   handshakeCounting(6)
// );

// const removeDuplicates = (str) => {
//   let result = "";
//   if (typeof str !== "string") {
//     return "need string to remove duplicate";
//   } else {
//     let arrOfString = str.split(",");
//     result = Array.from(new Set(arrOfString)).join(",");
//   }
//   return result;
// };
// console.log(
//   "🚀 ~ file: interview.js ~ line 284 ~ removeDuplicates ~ removeDuplicates",
//   removeDuplicates("кошка,собака,лошадь,корова,корова,корова,кошка")
// );
// console.log(
//   "🚀 ~ file: interview.js ~ line 284 ~ removeDuplicates ~ removeDuplicates",
//   removeDuplicates(1)
// );
