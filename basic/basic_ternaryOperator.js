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

var boolean=true;
var out=boolean?'this is true':'this is false';
console.log(out)
