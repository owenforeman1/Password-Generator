// Assignment Code
var generateBtn = document.querySelector("#generate");
// make button work
generateBtn.addEventListener("click", promptUser);

var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharactersArray = [
  "~",
  "'",
  "`",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "+",
  "=",
  "-",
  "[",
  "]",
  "\\",
];

var length;
var lowercase;
var uppercase;
var numbers;
var special;

// Write password to the #password input
function promptUser() {
  length = window.prompt(
    "Password length: More than 8, less than 128characters"
  );
  if (length < 8 || length > 128) {
    window.alert("Please Enter within the Length Parameters");
  } else {
    lowercase = window.confirm("Lowercase?");
    uppercase = window.confirm("Uppercase?");
    numbers = window.confirm("Numbers?");
    special = window.confirm("Special Characters?");
    writePassword();
  }
}

function generatePassword() {
  if (!lowercase && !uppercase && !numbers && !special) {
    return "No Parameters Selected";
  }
  var pool = [];

  if (lowercase === true) {
    pool = pool.concat(lowercaseArray);
  }
  if (uppercase === true) {
    pool = pool.concat(uppercaseArray);
  }
  if (numbers === true) {
    pool = pool.concat(numbersArray);
  }
  if (special === true) {
    pool = pool.concat(specialCharactersArray);
  }
  var finalPassword = "";
  for (var i = 0; i <= length; i++) {
    var index = Math.floor(Math.random() * pool.length);
    var computerChoice = pool[index];
    console.log(computerChoice);
    finalPassword = finalPassword.concat(computerChoice);
  }
  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
