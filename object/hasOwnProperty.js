//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties

// check wether the object "obj" has the property "checkProp". If it does, return that property's value. If not, return "Not found".
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp]}
  else{return "Not Found"}
  // Only change code above this line
}
