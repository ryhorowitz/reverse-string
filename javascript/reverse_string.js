function reverseString(str) {
  const resultArr = []
  const stringArr = str.split('')
  const length = str.length
  for (let i = 0; i < stringArr.length; i++) {
    const char = stringArr[i];
    newIndex = length - i 
    resultArr[newIndex] = char
  }
  return resultArr.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'racecar'");
  console.log("=>", reverseString("racecar"));

  console.log("Expecting: 'rallodpoop'");
  console.log("=>", reverseString("poopdollar"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// iterate through string make into array
// length - index equals the letters new index
// And a written explanation of your solution
