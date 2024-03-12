const reverseString = require("./reverseSrting");

function isPalindrome(word) {
  return (
    word.toLowerCase() === reverseString(word).toLowerCase()
  );
}

module.exports = isPalindrome;
