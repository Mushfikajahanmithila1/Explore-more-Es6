const product = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 55000 },
  { id: 3, name: "hp", price: 49000 },
  { id: 4, name: "sumsung", price: 75000 },
  { id: 5, name: "mac", price: 175000 },
];

class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`this is talk about ${talk}`);
  }
}
// const lenovo = new Product();
const lenovo = new Product("Mushfika");
lenovo.speak("what is this");
// console.log(lenovo);

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching Math");
  }
}

const teacher = new Teacher("Mahbub sir", "coding");
console.log(teacher);
