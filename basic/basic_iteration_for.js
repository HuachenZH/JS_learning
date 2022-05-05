// the syntax is like java

// a simple example
arr=[];
for(let i=0; i<5; i++) {
  arr.unshift(i); // as i used unshift, arr should be like 4 3 2 1 0
}

// a bit of practice : scalar product of two vector
// solution with for
  function dotProductVect(arr1,arr2) { // arr1 and arr2 must have the same length
    var out=0;
    for(var i=0; i<arr1.length; i++) {
      out+=arr1[i]*arr2[i];
    }
    return out;
  }
