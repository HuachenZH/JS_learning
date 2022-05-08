// push pop unshift shift
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


// --------------------------------------------------------------------------------------------------------------
// https://www.youtube.com/watch?v=6WTHrE7lrhk&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=31
//.join() 
// to concatenate the elements of an array to a string, and insert the argument of .join() between them.
var list=['banana','grape','watermelon'];
list1=list.join(', ');
console.log(list);  // [ 'banana', 'grape', 'watermelon' ]
console.log(typeof list); // object
console.log(list1); // banana, grape, watermelon
console.log(typeof list1);  // string


// --------------------------------------------------------------------------------------------------------------
// splice
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// splice(position, n-remove, value1, value2, ..., valueX)
// n-remove : if it's 0, then add. If it's 1, then replace 1 element

// to add new elements
var list=[0,1,2,3,4,5,6,7];
list.splice(4,0,'avril','mai'); // add new elements from 4, after 3
console.log(list); // [ 0, 1, 2, 3, 'avril', 'mai', 4, 5, 6, 7 ]

// to replace elements
// case 1: (replace one element, add a new element)
var list=[0,1,2,3,4,5,6,7];
list.splice(4,1,'avril','mai'); // replace one element from 4
console.log(list); // [ 0, 1, 2, 3, 'avril', 'mai', 5, 6, 7 ]
// only replace one element, so 4 is replaced, 5 is still here. 'mai' is inserted as a new element

// case 2: (replace two elements, no new elements added)
var list=[0,1,2,3,4,5,6,7];
list.splice(4,1,'avril','mai'); // replace two elements from 4
console.log(list); // [ 0, 1, 2, 3, 'avril', 'mai', 6, 7 ]
// replace two elements, so 4 and 5 are replaced. 

// case 3: (replace two elements and remove one element)
var list=[0,1,2,3,4,5,6,7];
list.splice(4,3,'avril','mai'); 
console.log(list); // [ 0, 1, 2, 3, 'avril', 'mai', 7 ]
// 4 and 5 are replaced, 6 is removed

// to remove elements:
// case 1: (remove all)
var list=[0,1,2,3,4,5,6,7];
list.splice(4); // remove all elements after index 4 (inclusive)
console.log(list); // [ 0, 1, 2, 3 ]

// case 2: (remove part)
var list=[0,1,2,3,4,5,6,7];
list.splice(4,3); // from 4 (inclusive), remove three elements
console.log(list); // [ 0, 1, 2, 3, 7 ]
// 4, 5, 6 these three elemnents are removed
