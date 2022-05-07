// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// expected [5, 4, 3, 2, 1, 0]

// method 1 : i iterate descendently, push i into the array
const myArray=[];
let i=5;
while(i>=0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

// method 2 : iiterate acsendently, unshift i into the arry
const myArray=[];
let i=0;
while(i<=5) {
  myArray.unshift(i);
  i++;
}
console.log(myArray);

// break in while true
var i=0;
while(true){
  if(i==5){
    break;
  }
  console.log(i);
  i++;
}
