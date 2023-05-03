// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  //  declare var characters as string of total possible characters 
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#[/?-$*%&)(+:;<>@^}{~" ;
  // declare var chosenCharacters as empty string
  var chosenCharacters = "";


  // prompt asking length requirement
  var pwLength = parseInt(prompt("How long would you like your password to be?"));
  // alerts if length is less than 8 or greater than 128 and returns empty string
    if (pwLength < 8 || pwLength > 128) {
      alert("Password must contain at least 8 characters and no more than 128 characters.");
      return "";
      // alerts if cancel or non-numerical characters are entered and returns empty string 
    } else if (!pwLength) {
      alert("Please input valid number.");
      return "";
    } 

  // confirm asking to include lowercase
  var includeLower = confirm("Would you like to include lowercase characters?");
  // if true, slice portion of characters containing lowercase and assign to new variable charactersLower; add assignment onto chosenCharacters
  if (includeLower == true) {
    var charactersLower = characters.slice(0, 26);
    chosenCharacters += charactersLower;
  }
  

  // confirm asking to include uppercase
  var includeUpper = confirm("Would you like to include uppercase characters?");
  // if true, slice portion of characters containing uppercase and assign charactersUpper; add assignment onto chosenCharacters
  if (includeUpper == true) {
    var charactersUpper = characters.slice(26, 52);
    chosenCharacters += charactersUpper;
  }


  // confirm asking to include numbers
  var includeNum = confirm("Would you like to include numbers?");
  // if true, slice portion of characters containing numbers and assign charactersNum; add assignment onto chosenCharacters
  if (includeNum == true) {
    var charactersNum = characters.slice(52, 62);
    chosenCharacters += charactersNum;
  }


  // confirm asking to include special characters
  var includeSpecial = confirm("Would you like to include special characters?");
  // if true, slice portion of characters containing special characters and assign characterSpecial; add assignment onto chosenCharacters
  if (includeSpecial == true) {
    var characterSpecial = characters.slice(62, characters.length);
    chosenCharacters += characterSpecial;
  }

  // give alert and return empty string if all include confirms are false 
  if (includeLower == false && includeUpper == false && includeNum == false && includeSpecial == false) {
    alert("Please choose at least one character type.");
    return "";
  }
  
  // console.log chosenCharacters to verify user changes have beeen stored for each prompt
  console.log("Possible Characters: " + chosenCharacters);

  // password generation below
  // referenced https://www.programiz.com/javascript/examples/generate-random-strings

  // assign var result as an empty string
  var result = '';
  // create for loop that runs length assigned by user input in first prompt
  for (var i = 0; i < pwLength; i++) {
    // add existing data for result variable to the math.random function using characters from the chosenCharacters variable and chosenCharacters as length parameter
    result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }

  // return result at end to be displayed on screen
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

