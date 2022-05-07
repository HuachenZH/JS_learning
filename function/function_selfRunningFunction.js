// a kind of special function: self running function
// cf:
// https://stackoverflow.com/questions/592396/what-is-the-purpose-of-a-self-executing-function-in-javascript
// https://www.youtube.com/watch?v=JbI-mL0EsxU&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=26

(function() {
  var foo = 3;
  console.log(foo);
})();
// another kind of syntax:
(function() {
  // Local variable
  i = 10; // uh-oh, forgot the var!
  console.log('i=' + i);
}());

console.log(foo); // there will be error, since foo is a scope variable but not a global variable.
