// original with if expression:
var valveOpen=true;
var openStatusString;
if(valveOpen){
  openStatusString='TRUE';
}else{
  openStatusString='FALSE';
}
console.log(openStatusSring);

// a shortcut with ternary operator:
var valveOpen=false;
var openStatusString=(valveOpen)?'open':'closed';
//                        ^                      judge the true or false by this variable
//                                  ^             true in this case
//                                          ^     false in this case
console.log(openStatusString)
// another example
var boolean=true;
var out=boolean?'this is true':'this is false';
console.log(out)


// another use:
var boolString='true';
var boolbool=(boolString=='true')? true:false;
console.log(boolbool)
// this equals to:
if(boolString=='true'){
  boolbool=true;
}else{
  boolbool=false;
}

// for numbers:
var num=0;
console.log(num+' is '+(num?'true':'false'));
// the result will always be false when num is 0. In all other cases, the result will be true.
// or rather:
var num=0;
console.log(num?'num is not 0':'num is 0');

// for strings:
var string1;
var string2=null;
var string3='a';
console.log(string1?'true':'false'); // false
console.log(string2?'true':'false'); // false
console.log(string3?'true':'false'); // true
// or rather:
console.log(string3?'this string has something valide':'this is string has nothing')
