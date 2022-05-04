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
console.log(out.toString); // it shows: [Function: toString]
console.log(typeof out.toString); // it shows: function
// the correct syntax should be:
console.log(typeof out.toString()+out.toString());



// priority
var num=64;
var str='63';
console.log(typeof num+parseFloat(str)); // number63
console.log(typeof (num+parseFloat(str))); // number


// use of {} in an if statement
var a=1;
var b=2;
if (a<b) // "if" only cover the next line, if there is no {}. The same for "else"
	console.log('you can see me when the statement is true')
console.log('you can always see me, no matter the statement if true of false')

