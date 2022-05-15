// indexOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
var subject='this is a message';
var world=['message','s','abcxdz'];
world.forEach(element=>{console.log('We are looking for the position of: '+element); // a little review of how to iterate in an array : forEach
  var position=subject.indexOf(element);
  console.log(position)
})
// output:
// We are looking for the position of: message
// 10
// We are looking for the position of: s
// 3       // there are several 's', it returns the index of the first 's'
// We are looking for the position of: abcxdz
// -1      // when the world that we find does not exist, it returns -1

