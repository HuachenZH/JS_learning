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



// https://www.youtube.com/watch?v=6WTHrE7lrhk&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=31
//.join() 
// to concatenate the elements of an array to a string, and insert the argument of .join() between them.
var list=['banana','grape','watermelon'];
list1=list.join(', ');
console.log(list);  // [ 'banana', 'grape', 'watermelon' ]
console.log(typeof list); // object
console.log(list1); // banana, grape, watermelon
console.log(typeof list1);  // string
