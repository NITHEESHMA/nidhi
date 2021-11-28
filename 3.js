const a = true, b = false;
const c = 4;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

console.log((c < 6) && (c > 3)); // true

console.log((c > 2) || (c < 2)); //true
console.log(!a);
console.log(!b);