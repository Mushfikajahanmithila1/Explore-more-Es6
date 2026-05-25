const players = [75, 45, 55, 66, 52, 74, 85, 72];
// const selected = players.filter((n) => n > 70);
// const selected = players.filter((n) => n > 80);
// const selected = players.filter((n) => n > 50);
const selected = players.filter((n) => n % 2 === 1);
console.log(selected);
