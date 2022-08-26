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
