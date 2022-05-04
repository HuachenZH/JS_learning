
// typeof
out=4;
console.log('type of out is: ' + typeof out);
out=out.toString();
console.log(typeof out);
console.log('type of out now becomes: ' + typeof out);

// js is loosely typed language, we can have weird stuffs like:
console.log('string and '+6+' ...number')


// equality and strict equality
var a=1; // number
var b='1'; // string
console.log(a==b); // true. equality
console.log(a===b); // false. strict equality

