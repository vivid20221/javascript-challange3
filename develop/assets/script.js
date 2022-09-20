// Assignment code here
var generatePassword = document.querySelector(#generate);



function generatePassword("passeordLength") {

    var userInput = windows.prompt("How long do you want ypur password to be?")
    
    var passwordLegth = parseInt()
    
    if (isNaN(passwordlength)) {
        window.alert("Thats not a number!")
        return
    }

    if (password < 8 || passwordlength > 128) {
        window.alert("Paword length must be between 8 amd 128 characters")
        return
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword( ) {
  var password = generatePassword(8);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);