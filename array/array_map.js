// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var arr = [1, 2, 3, 5];
var newArr = arr.map(function (elem) {
    elem = elem + 100;
    return elem;
})
console.log(newArr);
