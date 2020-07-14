// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultEl = document.getElementById("password");

// Add event listener to generate button to initiate function generatePassword on click
generateBtn.addEventListener("click", writePassword);

// Arrays for different character types
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Function to create a password within the set length required by assignment
function generatePassword () {
  
  // Prompts user to select desired number of password characters upon pressinng the button  
  var confirmPassLength = prompt ("How many characters would you like your password to be? (Choose between 8 and 128 characters)");

  // Make sure the user's requested length falls in line with the directions specifications of between 8 and 128 characters
  while (confirmPassLength <= 7 || confirmPassLength >= 129) {
    
    // Alert user to conform to length requirements
    alert("Your password's length must be between 8 and 128 characters!");
    
    // Repeat prompt asking for character length; if user selects well, user will move down to line 31's alert
    var confirmPassLength = prompt ("How many characters would you like your password to be? (Choose between 8 and 128 characters)");
  }

  // This will show the user his/her choice for the length of the desired password
  alert("Your password will contain " + confirmPassLength + " characters. Select OK to continue making your password.");

  // Prompts for use in the password
  var confirmLowerCase = confirm("Select OK if you would like lowercase letters in your password; otherwise, select Cancel.");
  var confirmUpperCase = confirm("Select OK if you like uppercase letters in your password; otherwise, select Cancel.");
  var confirmPossNum = confirm ("Select OK if you like numbers in your password; otherwise, select Cancel.");
  var confirmSpecial = confirm ("Select OK if you like special characters in your password;otherwise, select Cancel.");
    
    // Ensure at least one parameter from the confirms above is selected
    while (confirmLowerCase === false && confirmUpperCase === false && confirmPossNum === false && confirmSpecial === false) {
      
      // Forces user to have at least onne of the parameters in lines 34-37 in order to create a password
      alert("You must have at least one parameter selected in order to create a password!");
      
      // If alert triggers, user will be asked to re-select options on the prompts here
      var confirmLowerCase = confirm("Select OK if you would like lowercase letters in your password; otherwise, select Cancel.");
      var confirmUpperCase = confirm("Select OK if you like uppercase letters in your password; otherwise, select Cancel.");
      var confirmPossNum = confirm ("Select OK if you like numbers in your password; otherwise, select Cancel.");
      var confirmSpecial = confirm ("Select OK if you like special characters in your password;otherwise, select Cancel.");
    }
  
  // Empty array to be filled with possible characters from if-statements below
  var allPassChars = []

    // If-statements used to combine the desired elements into a new password string
    if (confirmLowerCase) {
      allPassChars = allPassChars.concat(lowerCaseChars)
    }
    if (confirmUpperCase) {
      allPassChars = allPassChars.concat(upperCaseChars)
    }
    if (confirmPossNum) {
      allPassChars = allPassChars.concat(numberChars)
    }
    if (confirmSpecial) {
      allPassChars = allPassChars.concat(specialChars)
    }


  // Creating a variable with an unassigned value to be determine via the for-loop below
  var randomPassword = "";
    
    // For-loop will until reaching the number of characters the user has requested, adding values assigned to the variable in line 48 above by the if-statements for new characters
    for (var i = 0; i < confirmPassLength; i++) {
      randomPassword = randomPassword + allPassChars[Math.floor(Math.random() * allPassChars.length)];
    }

    // This will return the user's requested password based upon selected criteria
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}