const passwordValidator = require('genie-password-validator');

// Define your password to be validated
const password = 'MySecureP@ssw0rd';

// Define validation options (optional)
const options = {
  minUppercase: 1,       // Minimum uppercase letters
  minLowercase: 1,       // Minimum lowercase letters
  minDigits: 1,          // Minimum digits
  minSpecialChars: 1,    // Minimum special characters
  minLength: 8           // Minimum total length
};

// Call the validation function
const result = passwordValidator.isStrongPassword(password, options);

// Check the result
if (result.isValid) {
  console.log('Password is strong and meets the criteria.');
} else {
  console.error('Password is weak. Please fix the following issues:');
  result.messages.forEach((message) => {
    console.error(message);
  });
}


Function: isStrongPassword(password, options)
password (string, required): The password to be validated.
options (object, optional): An object containing validation options. You can customize the validation criteria using the following properties:
minUppercase (number, default: 1): Minimum uppercase letters required.
minLowercase (number, default: 1): Minimum lowercase letters required.
minDigits (number, default: 1): Minimum digits required.
minSpecialChars (number, default: 1): Minimum special characters required.
minLength (number, default: 8): Minimum total length of the password.

Return Value
The isStrongPassword function returns an object with the following properties:

isValid (boolean): true if the password is strong and meets the criteria; otherwise, false.
messages (array): An array of error messages explaining which criteria the password did not meet.


