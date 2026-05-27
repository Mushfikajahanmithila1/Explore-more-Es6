const numbers = [9, 7, 5, 1, 3, 6, 4, 8];
// for (num of numbers) {
//   //   console.log(num);
//   const array = [];
//   if (num % 2 === 1) {
//     num++;
//     array.push(num);
//     console.log(array);
//   }
// }

// task2
const num = numbers.filter((n) => n % 10 === 0);
// console.log(num);

// task3
const sj = [
  { name: "pappu", age: 26 },
  { name: "pappun mia", age: 24 },
  { name: "gappu mia", age: 28 },
];
const filter = sj.filter((pro) => pro.age > 24);
// console.log(filter);
