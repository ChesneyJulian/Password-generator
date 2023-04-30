// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //  YOUR CODE HERE

var passwordLength= prompt("How many characters would you like your password to contain?");

    if (passwordLength < 9) {

      alert("Your password must be at least 8 characters and not exceed 128 characters.");

    }   else if (passwordLength > 128) {

      alert("Your password must be at least 8 characters and not exceed 128 characters."); 
    
    } 

var passwordLower = confirm("Would you like to include lowercase characters?");

var passwordUpper = confirm("Would you like to include uppercase characters?");

var passwordNumbers = confirm("Would you like to include numbers?");

var passwordSpecial = confirm("Would you like to include special characters?");

      
  
    


  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var sepcialChars = "?/>.<,:;!~+-()^{}[]*_";

  // var random = 

  // var random = Math.floor(Math.random() * numbers.length);
  // return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
