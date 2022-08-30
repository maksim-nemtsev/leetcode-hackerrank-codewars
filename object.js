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
