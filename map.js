const numbers = [3, 56, 522, 64, 3, 256, 6];

function dobbleIt(num) {
  return num * 2;
}
const double = numbers.map(dobbleIt);
// console.log(double);

const double2 = (n) => n * 2;
const doubled = numbers.map(double2);
const doubled2 = numbers.map((n) => n * 2);
// console.log(doubled);
