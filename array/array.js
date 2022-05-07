// declare an empty array
const myArray=[];

// arrays are mutable, even if declared by const
myArray.push(5); // myArray will be : [ 5 ]
// however if i do:
myArray=[5]; // TypeError: Assignment to constant variable.



// https://www.youtube.com/watch?v=XjCUomzmtD8&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=29
// we can also create an array in this way:
var list=[];
list[0]=0;
list[2]=2;
list[3]=NaN;
console.log(list); // [ 0, <1 empty item>, 2, NaN ]
