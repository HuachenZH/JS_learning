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


// https://www.youtube.com/watch?v=XjCUomzmtD8&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=29
// we can also create an array in this way:
var list=[];
list[0]=0;
list[2]=2;
list[3]=NaN;
console.log(list); // [ 0, <1 empty item>, 2, NaN ]
