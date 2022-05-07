
// typeof
out=4;
console.log('type of out is: ' + typeof out);
out=out.toString();
console.log(typeof out);
console.log('type of out now becomes: ' + typeof out);

// js is loosely typed language, we can have weird stuffs like:
console.log('string and '+6+' ...number')


// equality and strict equality
var a=1; // number
var b='1'; // string
console.log(a==b); // true. equality
console.log(a===b); // false. strict equality

// ++i and i++
// ++i
var i=0;
var done=false;
while(!done){
  if(i<5){
    console.log(++i + ' done='+done); // increment i first, then use i for console.log. The output will be 1 2 3 4 5
    continue;
  }
  console.log('i think we are done');
  done=true;
}
// i++
var i=0;
var done=false;
while(!done){
  if(i<5){
    console.log(i++ + ' done='+done); // use i for console.log first, then increment i. The output will be 0 1 2 3 4
    continue;
  }
  console.log('i think we are done');
  done=true;
}
