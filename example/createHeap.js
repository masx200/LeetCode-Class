const { Heap } = require("../index");

const h = new Heap([3, 2, 1, 4, 7, 10], null);
console.log(h.value);
console.log(h.add(0));
console.log(h.value);
console.log(h.delete());
console.log(h.value);
console.log(h.delete());
console.log(h.value);
console.log(h.delete());
console.log(h.value);
console.log(h.delete());
console.log(h.value);
