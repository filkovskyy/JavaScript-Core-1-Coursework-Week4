/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let splitted = str.split('');
  let upperCase = splitted[0].toUpperCase();
  splitted[0] = upperCase;
  let joined = splitted.join('');
  return joined;
}
/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = 'daniel';

console.log(capitalise(name));
console.log(capitalise('hello'));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
