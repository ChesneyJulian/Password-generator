// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  //  YOUR CODE HERE

// objectives:
// prompt asking length requirement
var pwLength = parseInt(prompt("How long would you like your password to be?"));
// alerts if length is less than 8 or greater than 128
  if (pwLength < 8 || pwLength > 128 ) {
    alert("Password must contain at least 8 characters and no more than 128 characters.");
    return;
  }
// confirm asking to include lowercase
var includeLower = confirm("Would you like to include lowercase characters?");
// confirm asking to include uppercase
var includeUpper = confirm("Would you like to include uppercase characters?");
// confirm asking to include numbers
var includeNum = confirm("Would you like to include numbers?");
// confirm asking to include special characters
var includeSpecial = confirm("Would you like to include special characters?");


// random password string generated and shown in output
// use if statements to slice characters from string according to confirm data

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#[]/?-$*%";

console.log(characters);



var random = Math.floor(Math.random() * characters.length);
var output = characters[random] * pwLength;
console.log(output);



  }  
   


 



  // var random = 

  // var random = Math.floor(Math.random() * numbers.length);
  // return;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

