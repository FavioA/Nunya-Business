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

  // if (
  //   includeLower === false &&
  //   includeUpper === false &&
  //   includeNumbers === false &&
  //   includeSpecial === false
  // ) {
  //   alert("At least one type of character must be selected!");
  //   return;
  // }

  // var charactersSelected = {
  //   includeLower: includeLower,
  //   includeNumbers: includeNumbers,
  //   includeSpecial: includeSpecial,
  //   includeUpper: includeUpper,
  // };

  var charactersSelected = [lcCharacters, ucCharacters, numCharacters, specialCharacters]
  for (var i = 0; i < charactersSelected.length; i++) { 
    console.log("I am going to see a random password " + charactersSelected[i] + ".");

    return(charactersSelected)
  }

  
  // function generatePassword(includeLower, includeUpper, includeNumbers, includeSpecial, length);

  
  //if statements to create a big array of user choices
  // make confirms for each character type
  // combine all the characters the user picks in to one array

  // 2. validate the input
  // 3. Generate password based on criteria
  var password = "";
  // loop for however long the password length is
  var num = Math.floor(Math.random() * lcCharacters.length);
  var char = lcCharacters[num];
  password = password + char;
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

// generateEL.addEventListener('click', () => {
//   var length = prompt.value;
//   // console.log(length);

//   var includeLower = lcCharacters.checked;
//   var includeUpper = ucCharacters.checked;
//   var includeNumbers = numCharactersCharacters.checked;
//   var includeSpecial = specialCharactersCharacters.checked;

//   console.log(includeLower, includeUpper, includeNumbers, includeSpecial)

// })
