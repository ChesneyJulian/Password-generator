// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  //  YOUR CODE HERE
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#[/?-$*%&)(+:;<>@^}{~" ;
var chosenCharacters = "";

// objectives:
// prompt asking length requirement
var pwLength = parseInt(prompt("How long would you like your password to be?"));
// alerts if length is less than 8 or greater than 128
  if (pwLength < 8 || pwLength > 128) {
    alert("Password must contain at least 8 characters and no more than 128 characters.");
    return;
  } else if (!pwLength) {
    alert("Please input valid number.");
    return;
  } 

// confirm asking to include lowercase
var includeLower = confirm("Would you like to include lowercase characters?");
// if true, slice portion of characters containing lowercase and assign to new variable charactersLower; add assignment onto chosenCharacters
 if (includeLower == true) {
  var charactersLower = characters.slice(0, 26);
  console.log(charactersLower);
  chosenCharacters += charactersLower;
 }
 

// confirm asking to include uppercase
var includeUpper = confirm("Would you like to include uppercase characters?");
// if true, slice portion of characters containing uppercase and assign charactersUpper; add assignment onto chosenCharacters
if (includeUpper == true) {
  var charactersUpper = characters.slice(26, 52);
  console.log (charactersUpper);
  chosenCharacters += charactersUpper;
}


// confirm asking to include numbers
var includeNum = confirm("Would you like to include numbers?");
// if true, slice portion of characters containing numbers and assign charactersNum; add assignment onto chosenCharacters
if (includeNum == true) {
  var charactersNum = characters.slice(52, 62);
  console.log (charactersNum);
  chosenCharacters += charactersNum;
}


// confirm asking to include special characters
var includeSpecial = confirm("Would you like to include special characters?");
// if true, slice portion of characters containing special characters and assign characterSpecial; add assignment onto chosenCharacters
if (includeSpecial == true) {
  var characterSpecial = characters.slice(62, characters.length);
  console.log(characterSpecial);
  chosenCharacters += characterSpecial;
}

var launch = confirm("Possible characters chosen for random password generation: " + chosenCharacters + "\nClick 'OK' to launch generator.");
  if (launch == false) {
    return;
  }

// random password string generated and shown in output
// referenced https://www.programiz.com/javascript/examples/generate-random-strings

var result = '';
for (let i = 0; i < pwLength; i++) {
  result +=
  chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}  
   


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

