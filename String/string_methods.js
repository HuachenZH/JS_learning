// indexOf  (get position (or index))
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



// substring  (get a substring)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// substring(indexStart)
// substring(indexStart, indexEnd)
var str = 'Approved: RITM0010001 - Laptop renewal';
var pos = str.indexOf('RITM');
console.log('RITM0010001'.length); // its length is 11
var ritmNumber = str.substring(pos, pos + 11);
console.log(ritmNumber); // it returns : RITM0010001
