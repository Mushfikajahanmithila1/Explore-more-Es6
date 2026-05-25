const product = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 55000 },
  { id: 3, name: "hp", price: 49000 },
  { id: 4, name: "sumsung", price: 75000 },
  { id: 5, name: "mac", price: 175000 },
];

// map
const name = product.map((pro) => pro.name);
// console.log(name);

// forEach
const forEach = product.forEach((pro) => pro.id);
// console.log(forEach);

// filter
const filter = product.filter((pro) => pro.price > 70000);
// console.log(filter);

// find
const find = product.find((pro) => pro.name.length > 4);
// console.log(find);

// reduce
const reduce = product.reduce((p, c) => p + c.price, 0);
console.log(reduce);
