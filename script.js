// Assignment Code
var generateBtn = document.querySelector("#generate");

// created arrays for password characters

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let symbols = ["!", "@", "#", "$", "*", "%", "$", "/", "?", "@", "&", "+"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Write password to the #password input
function writePassword(password) {
  let password = generatePassword();
  let passwordText = document.querySelector

}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
