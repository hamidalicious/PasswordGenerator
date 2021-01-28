function generatePassword() {
  var password = []
  var length = parseInt(prompt("How long do you want your password to be?"))

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Make sure the password length is more than 8 characters and less than 128 characters")
  
  } else {
    
    let confirmLower = confirm("Would you like uppercase letters?");
    let confirmUpper = confirm("Would you like lowercase letters?");
    let confirmSymbols = confirm("Would you like any symbols?");
    let confirmNumbers = confirm("Would you like any numbers?");

    while (password.length < length) {
      if (password.length === length) {
        break
      }
      if (confirmUpper) {
        password.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmLower) {
        password.push(lowercase[Math.floor(Math.random() * lowercase.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmSymbols) {
        password.push(symbols[Math.floor(Math.random() * symbols.length)])
      }
      if (password.length === length) {
        break
      }
      if (confirmNumbers) {
        password.push(numerics[Math.floor(Math.random() * numerics.length)]);
      }
    }
  }
}
