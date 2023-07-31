var lcCharacters = [
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

var ucCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
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

var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "\\",
  "^",
  "`",
  "{",
  "}",
  "|",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("password button clicked");

  var passwordLength = prompt("How long do you want your password to be?");
  console.log(passwordLength);

  if (Number.isNaN(passwordLength)) {
    alert("Please enter a valid number for password length!");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password needs to be 8 characters and 128 or less characters.");
    return;
  }

  // confirms first
  // var wantsUpper = confirm("do you want uppercase")
  var includeLower = confirm("Include lower case letters?");
  var includeUpper = confirm("Include upper case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // 2. validate the input
  // if (
  //   includeLower === false &&
  //   includeUpper === false &&
  //   includeNumbers === false &&
  //   includeSpecial === false
  // ) {
  //   alert("At least one type of character must be selected!");
  //   return;
  // }

  //if statements to create a big array of user choices
  // make confirms for each character type
  // combine all the characters the user picks in to one array
  var charactersSelected = [];

  // if includeLower is true:
  // charactersSelected = charactersSelected concatenated with lcCharacters
  if (includeLower) {
    charactersSelected = charactersSelected.concat(lcCharacters);
  }

  // if includeUpper is true:
  //     charactersSelected = charactersSelected concatenated with ucCharacters
  if (includeUpper) {
    charactersSelected = charactersSelected.concat(ucCharacters);
  }

  // if includeNumbers is true:
  //     charactersSelected = charactersSelected concatenated with numCharacters
  if (includeNumbers) {
    charactersSelected = charactersSelected.concat(numCharacters);
  }

  // if includeSpecial is true:
  //  charactersSelected = charactersSelected concatenated with specialCharacters
  if (includeSpecial) {
    charactersSelected = charactersSelected.concat(specialCharacters);
  }

  // Checking if at least one character type was selected
  if (charactersSelected.length === 0) { 
    alert("At least one type of character must be selected!");
    return "Please select at least one character type.";

  }

  console.log(charactersSelected);
  // 3. Generate password based on criteria
  // loop for however long the password length is
  var password = "";

  for (var i = 0; i < passwordLength; i++) { 
      console.log("I am going to see a random password " + charactersSelected[i] + ".");
      var num = Math.floor(Math.random() * charactersSelected.length);
      var char = charactersSelected[num];
      password = password + char;
  }

  // 4. display password to the page
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


