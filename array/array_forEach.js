// define a function after forEach
var list = [1,2,3,5,7,11,13,17];
list.forEach(myfct);
function myfct(item){
  console.log(item); // the output on the console will be: 1 2 3 4 7 11 13 17
}
// something more: item and index
var list = [1,2,3,5,7,11,13,17];
list.forEach(myfct);
function myfct(item,index){
  console.log('item is '+item+', index is '+index); // Notice: the variable name item and index are casual
} // output on the console:
// item is 1, index is 0
// item is 2, index is 1
// item is 3, index is 2
// item is 5, index is 3
// item is 7, index is 4
// item is 11, index is 5
// item is 13, index is 6
// item is 17, index is 7


// define the function inside forEach
var list = [1,2,3,5,7,11,13,17];
list.forEach(function(item){console.log(item)}); // the output on the console will be: 1 2 3 4 7 11 13 17
// something more: item and index
var list = [1,2,3,5,7,11,13,17];
list.forEach(function(item,index){console.log('item is '+item+', index is '+index)}); // Notice: the variable name item and index are casual. The output on the console:
// item is 1, index is 0
// item is 2, index is 1
// item is 3, index is 2
// item is 5, index is 3
// item is 7, index is 4
// item is 11, index is 5
// item is 13, index is 6
// item is 17, index is 7

// => :
var list = [1,2,3,5,7,11,13,17];
list.forEach(item=>console.log('item is '+item)) // the output on the console will be: 1 2 3 4 7 11 13 17
// item and index
var list = [1,2,3,5,7,11,13,17];
list.forEach((item,index)=>console.log('item is '+item+', index is '+index)); // the output will be:
// item is 1, index is 0
// item is 2, index is 1
// item is 3, index is 2
// item is 5, index is 3
// item is 7, index is 4
// item is 11, index is 5
// item is 13, index is 6
// item is 17, index is 7
