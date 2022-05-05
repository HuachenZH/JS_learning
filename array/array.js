// declare an empty array
const myArray=[];

// arrays are mutable, even if declared by const
myArray.push(5); // myArray will be : [ 5 ]
// however if i do:
myArray=[5]; // TypeError: Assignment to constant variable.

// .push()
// append data to the end of array
myArray.push(4); // [ 5, 4 ]

// .unshift()
// insert data to the beginning of array
myArray.unshift(3); // [ 3, 5, 4 ]
myArray.unshift(2); // [ 2, 3, 5, 4 ]

// .pop()  // no argument inside the parenthesis
// remove the last element and return it
myArray.pop(); // only remove the last element. myArray will be : [ 2, 3, 5 ]
var tmp=myArray.pop(); //remove the last element and save the value into variable var. myArray will be: [ 2, 3 ]

// .shift()
// like .pop() but with the first element 
var tmp=myArray.shift(); // remove the first element and save the value into tmp. myArray will be: [ 3 ]. tmp=2

