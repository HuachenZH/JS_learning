// gs
// https://www.youtube.com/watch?v=a4eSjE0yXRA&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=6
var name='Michael Jackson';
gs.info(name);
// this work with the instance of serviceNow, it will return: x_803884_test1: Michael Jackson
// and this does not work with my local nodejs

// gs stands for glide system, which provides a number of convenient methods to get information about the system, the current logged in user, etc.
// cheatsheet: https://servicenowguru.com/scripting/user-object-cheat-sheet/




// when i forgot the () of .toString()
var out=4;
console.log(out.toString) // it shows: [Function: toString]
console.log(typeof out.toString) // it shows: function
// the correct syntax should be:
console.log(typeof out.toString()+out.toString())







