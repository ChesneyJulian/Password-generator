// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //  YOUR CODE HERE

  var passwordLength = prompt("How many characters would you like your password to contain?");

      if (passwordLength < 9) {

        alert("Your password must be at least 8 characters and not exceed 128 characters.");
  
      }   else if (passwordLength > 128) {

        alert("Your password must be at least 8 characters and not exceed 128 characters.");
      
      }  
      
  var passwordCriteria = {

      passwordLower: confirm("Would you like to include lowercase characters?"),

      passwordUpper: confirm("Would you like to include uppercase characters?"),

      passwordNumbers: confirm("Would you like to include numbers?"),

      passwordSpecial: confirm("Would you like to include special characters?"),

      // result: " "

      }

  var characters = {
         lowercase: ("abcdefghijklmnopqrstuvwxyz") ,
         uppercase: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") ,
         numbers: ("0123456789") ,
         sepcialChars: ("?/>.<,:;!~+-()^{}[]*_") }


      if (passwordCriteria = true) {
        generatePassword(passwordLength); {
          for (var i = 0; i < length; i++) {
            characters(Math.floor(Math.random()));
          }
        }
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


