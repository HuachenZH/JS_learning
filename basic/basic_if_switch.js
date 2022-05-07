// with if  else if  else:
var bits='01';
var niveau='';
if(bits==='00'){
  niveau='-3V';
}else if(bits==='01'){
  niveau='-1V';
}else if(bits==='10'){
  niveau='1V';
}else if(bits==='11'){
  niveau='3V';
}else{
  niveau='error'
}
console.log('niveau: '+niveau)

// with switch
var bits='111';
var niveau='';
switch(bits){
  case '1000': // this means '1000' and '00' will have the same niveau
  case '00':
    niveau='-3V'
    break;
  case '01':
    niveau='-1V';
    break;
  case '10':
    niveau='1V';
    break;
  case '11' :
    niveau='3V';
    break;
  default: // default is like the 'else' at the end of an if else
    niveau='error' // default doesn't require break here, as it's at the end. 
}
console.log('niveau: '+niveau)

// lab 3

var language='english';
var out='chinese';
switch(language){
  case 'english':
    out='hello world';
    break;
  case 'french':
    out='bonjour le monde';
    break;
  case 'chinese':
    out='你好世界';
    break;
  default:
    out='error'
}
console.log(out)
