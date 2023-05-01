// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //  YOUR CODE HERE

  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?/>.<,:;!~+-()^{}[]*_";
  let result = " ";
  // var uppercase = "";
  // var numbers = "";
  // var sepcialChars = "";

  var passwordLength = prompt("How many characters would you like your password to contain?");

      if (passwordLength < 9) {

        alert("Your password must be at least 8 characters and not exceed 128 characters.");
  
      }   else if (passwordLength > 128) {

        alert("Your password must be at least 8 characters and not exceed 128 characters.");
      
      }   else {
        var  passwordCriteria = {

      passwordLower : confirm("Would you like to include lowercase characters?"),
      passwordUpper : confirm("Would you like to include uppercase characters?"),
      passwordNumbers : confirm("Would you like to include numbers?"),
      passwordSpecial : confirm("Would you like to include special characters?")
        }
      }
   
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * passwordLength));
      }
     return;
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


