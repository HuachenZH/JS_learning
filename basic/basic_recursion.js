//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion

// need to review

// exemple with multipling n first element of an array
  // solution with for:
  function multiply(arr, n) { // multiply n first element of the array arr
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
  // solution with recursion
  function multiply(arr, n) { // multiply n first element of the array arr
    if (n <= 0) { // this is called a base case. In a recursive function, we always need a base case to stop the iteration
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
