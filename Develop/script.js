// array of special characters to be included in password
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

// array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// array of lowercase characters to be included in password
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

// array of uppercase characters to be included in password
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

  //log type of length chosen - should be number
  console.log(typeof lengthChosen)

// // logging all variables to verify that correct value is stored in variable
  console.log("lower: ",lowerCaseChosen);
  console.log("upper", upperCaseChosen);
  console.log("numeric", numericChosen);
  console.log("special", specialChosen);
  console.log("length", lengthChosen);

  // validate the length of the password length input 
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert ("Please select a value between 8-128");
    return;
  
  }

  // Validate at least one group chosen
  if (!lowerCaseChosen && !upperCaseChosen && !numericChosen && !specialChosen) {
    alert ("Please select at least one character group");
    return;
  }

// set variables for userOptions 
  var userOptions = {
    lowerCaseChosen: lowerCaseChosen,
    upperCaseChosen: upperCaseChosen,
    numericChosen: numericChosen,
    specialChosen: specialChosen,
    lengthChosen: lengthChosen,
  }

// returns the userOptions 
  return userOptions

}

// function for getting a random element from an array
function getRandomFromLength(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// function to generate password
function generatePassword (){
  var password = []
  var userOptions = getUserOptions()
  var mustHaves = []
  var canHaves = []
    // if upper 
    if (userOptions.upperCaseChosen) {
      console.log("canHaves:",canHaves);
      // add char list to can haves
      canHaves = canHaves.concat(upperCasedCharacters);
      console.log("canHaves upperCaseCharacters:",canHaves);
      //add 1 char to must haves
      console.log("must-haves upperCase push:",upperCasedCharacters[getRandomFromLength(upperCasedCharacters)])
      console.log("must-haves upperCase random:", getRandomFromLength(upperCasedCharacters))
      mustHaves.push(getRandomFromLength(upperCasedCharacters));
      console.log("mustHaves: ",mustHaves);
    }

      // add to possible charechters
   // if lower 
   if (userOptions.lowerCaseChosen) {
    // add char list to can haves
    canHaves = canHaves.concat(lowerCasedCharacters);
    //add 1 char to must haves
    mustHaves.push(getRandomFromLength(lowerCasedCharacters));
   }

   // if special 
   if (userOptions.specialChosen) {
    // add special char list to can haves
    canHaves = canHaves.concat(specialCharacters);
    //add 1 special char to must haves
    mustHaves.push(getRandomFromLength(specialCharacters));
   }




// loop through the lengthChosen  
console.log("Must Haves: ", mustHaves)
console.log("Length chosen", userOptions.lengthChosen)
for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++) {

     // add a random char to the passwordArray from the possible chars
     password.push(getRandomFromLength(canHaves));
     console.log("password:",password);

}
// loop through must haves
for (let i = 0; i < mustHaves.length; i++) {
       password[i] = mustHaves[i];
     }


// passwordArray to string (join mathod)
  return password.join('')
} 


// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
