function reverseString(str) {
  let reversed_str = ""

  for (let i = str.length -1; i > -1; --i ){
    reversed_str = reversed_str + str[i];
  }

  return reversed_str

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;


// Please add your pseudocode to this file
// And a written explanation of your solution

// Create a function called reverseString
  // Create a variable called reversed_str which is a empty string
  // iterate through str backwards 
    // add that iteration to the reverseString
  // return reversed_str