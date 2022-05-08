// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch
try{
  i++;
}catch(e){ // e stands for error
  console.error(e);
}
// output:
// ReferenceError: i is not defined
//     at Object.<anonymous> (D:\full_stack\backend\nodejs\testScript.js:8:3)
//     at Module._compile (node:internal/modules/cjs/loader:1099:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47


try{
  i++;
}catch{
  console.error('This is an error message');
}
// output:
// This is an error message
