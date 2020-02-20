let pockets = {
  money: 2000
};
let head = {
  glasses: 1
};
let table = {
  pen: 3
};
let bed = {
  sheet: 1,
  pillow: 2
};

pockets.__proto__=table;
bed.__proto__=table;
table.__proto__=head;

console.log(pockets.__proto__);

console.log(head.glasses);
//getting from head.glasses is faster than from pockets.glasses since glasses property is found within head.

//we use the  Object.getPrototypeOf() to find the prototype
function Light(high, low) {
  this.high=high;
  this.low=low;
 };

let today=new Light('high', 'low');
console.log(Object.getPrototypeOf(today));
//outputs.
const a=()=>{}
 undefined
typeof a;
 'function'
typeof A;
 'undefined'
function B() {}
 undefined
typeof B;
 'function'
Object.getPrototypeOf(a);
 [Function]
Object.getPrototypeOf(B);
 [Function]
a.prototype;
 undefined
B.prototype;
 B {}
B.prototype;
 B {}


