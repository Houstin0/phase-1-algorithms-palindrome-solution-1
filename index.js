function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
console.log(isPalindrome("Mom"));
console.log(isPalindrome("Taco cat"));
console.log(isPalindrome("Sit on a potato pan Otis"));
/* 
  Add your pseudocode here
//convert word string to lowercas and remove spaces and store in words variable
//reverse the string
//check if the original string and reversed string are equal
//return true if they are equalor false otherwise
*/

/*
  Add written explanation of your solution here
  //convert the string to lowercase and remove spaces
    word = lowercase(str)
    word = removeSpaces(str)
  //reverse the string
    reversedStr = reverseString(word)
   //check if the original string and reversed string are equal
    if word equals reversedword:
        return true
    else:
        return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
