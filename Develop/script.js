// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUserOptions() {

// set variables for options

  var lowerCaseChosen = false;
  var upperCaseChosen = false;
  var numericChosen = false;
  var specialChosen = false;
  var lengthChosen;

  //assigning variables for options chosen
  lowerCaseChosen = confirm("Would you like to use lower case letters in your password?");
  upperCaseChosen = confirm("Would you like to use upper case letters in your password?");
  numericChosen = confirm("Would you like to use numeric letters in your password?");
  specialChosen = confirm("Would you like to use special letters in your password?");
  lengthChosen = prompt("How many characters would you like your password to be (min. 8, max. 28)");
  lengthChosen = parseInt(lengthChosen)

  //log type of length chosen - should be integer
  console.log(typeof lengthChosen)

// logging all variables to verify that correct value is stored in variable
  console.log(lowerCaseChosen);
  console.log(upperCaseChosen);
  console.log(numericChosen);
  console.log(specialChosen);
  console.log(lengthChosen);

}

// function to generate password
function generatePassword (){
  var password = ""
  var userOptions = getUserOptions()
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert ("Please input a number value")
  }

  return password
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
