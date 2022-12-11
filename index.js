function isPalindrome(word) {
  // Write your algorithm here
  const theWord = word
  const splitArray = theWord.split('')
  const reverseWord = splitArray.reverse()
  const newWord = reverseWord.join('')
  console.log(newWord)

  return word===newWord
}

/* 
  Add your pseudocode here
  Created a function that will give us a reversed word which will be checked if its a palindrome
  We will seperate individual characters in an element 
  then reverse the characters 
  and after join al the chracters into one element which will be checked by the function
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
