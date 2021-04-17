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

  // Validate the length of the password length input 
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert ("Please select a value between 8-128");
  }
  if (!lowerCaseChosen && !upperCaseChosen && !numericChosen && !specialChosen) {
    alert ("Please select at least one character group")
  }


  var userOptions = {
    lowerCaseChosen: lowerCaseChosen,
    upperCaseChosen: upperCaseChosen,
    numericChosen: numericChosen,
    specialChosen: specialChosen,
    lengthChosen: lengthChosen,
  }

  console.log(userOptions)

}

// function to generate password
function generatePassword (){
  var password = []
  var userOptions = getUserOptions()
  var mustHaves = []
  var canHaves = []

    // if upper 
    if (userOptions.upperCaseChosen) {
      // add upper char list to can haves
      canHaves.concat(upperCaseChosen)
      //add 1 upper char to must haves
      mustHaves.push(upperCaseChosen[getRandomFromLength(upperCasedCharacters)])


    }

      // add to possible charechters
   // if lower 
      // add to mustHaves 1 upper char
      // add to possible charechters
   // if special 
      // add to mustHaves 1 upper char
      // add to possible charechters
   // .
   // .
   // .
   // loop through the lengthChosen
      // add a random char to the passwordArray from the possible chars
   // loop through must haves
      // replace a chare in the password array
   // passwordArray to string (join mathod)

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
