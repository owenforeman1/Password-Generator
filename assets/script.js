
var generateBtn = document.querySelector("#generate");
// make button work
generateBtn.addEventListener("click", promptUser);
// password options
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
// generate password function
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
// makes generate password work
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}