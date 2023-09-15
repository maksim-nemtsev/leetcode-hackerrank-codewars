//----------------------reduce obj /
// languages.reduce((acc, cur) => {
//   acc[`key${cur.id}`] = cur.name;
//   console.log("🚀 ~ file: index.tsx ~ line 46 ~ USSDMenu ~ langDictionary:this.props.languages.reduce ~ acc", acc)
//   return acc;
// }, {})

//---------------------------------------------------------------------
// const sosov = (str) => {
//   const symbolsStore = {};
//   let count = 1;

//   for (const letter of str) {
//     if (!symbolsStore[letter]) {
//       symbolsStore[letter] = count;
//     } else {
//       symbolsStore[letter]++;
//     }
//   }

//   return symbolsStore;
// };
// console.log(
//   "🚀 ~ file: index.js ~ line 22 ~ sosov ~ sosov",
//   sosov("abbbadooooonb")
// );

// const sosov = (str) => {

// };
// console.log(
//   "🚀 ~ file: index.js ~ line 22 ~ sosov ~ sosov",
//   sosov("abbbadooooonb")
// );

/**
  Есть массив операций.
  Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве 
  значений представить массивы c датами в формате MM-DD.
  Пример результата:
  result = {
    "2017": [
      "07-31",
      "08-22"
    ],
    "2018": [
      "01-01"
      "02-22"
    ]
  }
*/

// const operations = [
//   { date: "2017-07-31", amount: "5422" },
//   { date: "2017-06-30", amount: "5220" },
//   { date: "2017-05-31", amount: "5365" },
//   { date: "2017-08-31", amount: "5451" },
//   { date: "2017-09-30", amount: "5303" },
//   { date: "2018-03-31", amount: "5654" },
//   { date: "2017-10-31", amount: "5509" },
//   { date: "2017-12-31", amount: "5567" },
//   { date: "2018-01-31", amount: "5597" },
//   { date: "2017-11-30", amount: "5359" },
//   { date: "2018-02-28", amount: "5082" },
//   { date: "2018-04-14", amount: "2567" },
// ];

// function sortOperations(arr) {
//   return arr.reduce((acc, item) => {
//     const year = item.date.slice(0, 4);
//     const monthday = item.date.slice(5);

//     if (year in acc) {
//       acc[year].push(monthday);
//       acc[year].sort((a, b) => a - b);
//     } else {
//       acc[year] = [];
//       acc[year].push(monthday);
//       acc[year].sort((a, b) => a - b);
//     }
//     return acc;
//   }, {});
// }
// console.log(sortOperations(operations));

//leetcode ----------------------------------------------------------------

//cw DNA
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// function DNAStrand(dna) {
//   //your code here
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   var arr = dna.split("");

//   return arr.map((x) => [pairs[x]]).join("");
// }
// console.log(
//   "🚀 ~ file: object.js ~ line 90 ~ DNAStrand ~ DNAStrand(dna)",
//   DNAStrand("ATTGC")
// );

//------------------------------------------------------------------------------------------------
// const obj = { a: 1, b: 2, c: 3 };

// const keys = Object.keys(obj);
// console.log("🚀 ~ file: array.js ~ line 312 ~ keys", keys);

// for (let i = 0, l = keys.length; i < l; i++) {
//   console.log(keys[i] + " is " + obj[keys[i]]);
//   // keys[i] - это ключ
//   // obj[keys[i]] - а это свойство, доступное по этому ключу
// }
//-------------------------------------------------------------------------------------------

//find children in object ----------------------------------------------------------------
// const obj = {
//   a: {
//     b: {
//       c: {
//         d: "d",
//       },
//       c2: "c2",
//     },
//     b2: "b2",
//   },
//   f: "f",
// };
// const path = 'a.b.c.d';
// // find children in object a.b.c.d
// const findNestedKeys = (obj, path) => {
//   let result = obj;
//   const arrOfPath = path.split('.');

//   for(const el of arrOfPath) {
//     result = result[el]
//   }
//   return result;
// }
// console.log('findNestedKeys: ', findNestedKeys(obj, path));
//-------------------------------------------------------------------------------------------////////////////////////////////
// 	Write a program that takes two arrays of objects
// and returns a new array containing the objects that appear in both arrays
// const array1 = [{ name: "apple" }, { name: "banana" }, { name: "cherry" }];
// const array2 = [{ name: "apple" }, { name: "mango" }, { name: "blueberry" }];

// const sortedArrays = (array1, array2) =>
//   array1.filter((obj, idx) => obj.name === array2[idx].name);
// console.log(
//   "🚀 ~ file: object.js:154 ~ sortedArrays:",
//   sortedArrays(array1, array2)
// );

//-------------------------------------------------------------------------------------------//////////////

// Создайте функцию, которая объединяет два объекта в один.
// Напишите функцию, которая удаляет свойство из объекта по его имени.
// Реализуйте функцию, которая проверяет, является ли объект пустым.
// Напишите функцию, которая возвращает все ключи объекта в виде массива.
// Реализуйте функцию "deepClone", которая глубоко клонирует объект, включая вложенные объекты и массивы.
