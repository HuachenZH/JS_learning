// JSON.stringify : object to string
// https://github.com/chucktomasi/sn-learn-javascript/blob/master/Lesson_30/L30S02.js
// https://www.youtube.com/watch?v=jWJxqXNTQKU&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=41
var bookList = [
  {
    "title" : "Harry Potter and the Chamber of Secrets",
    "author" : "J.K. Rowling"
  },
  {
    "title" : "Moby Dick",
    "author" : "Herman Melville"
  },
  {
    "title" : "A Tale of Two Cities",
    "author" : "Charles Dickens"
  }
];
var bookListStr = JSON.stringify(bookList);
console.log(typeof bookListStr); // show its type. it's a string
console.log('\n');
console.log(bookListStr); // output: [{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]
console.log('\n');
var bookListStrFormat = JSON.stringify(bookList, null, 4);
// JSON.stringify(value, replacer, space): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
console.log(bookListStrFormat);
// output:
// [
//     {
//         "title": "Harry Potter and the Chamber of Secrets",
//         "author": "J.K. Rowling"
//     },
//     {
//         "title": "Moby Dick",
//         "author": "Herman Melville"
//     },
//     {
//         "title": "A Tale of Two Cities",
//         "author": "Charles Dickens"
//     }
// ]



// JSON.parse : string to object
// https://github.com/chucktomasi/sn-learn-javascript/blob/master/Lesson_30/L30S02.js
// https://www.youtube.com/watch?v=jWJxqXNTQKU&list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK&index=41
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
// it's also correct if it's :
// var libraryStr = '{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"}' 
// however this is not correct: var libraryStr = '"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"' 
console.log('length=' + libraryStr.length);
var libraryObj = JSON.parse(libraryStr);
console.log(typeof libraryObj)
console.log(libraryObj)
