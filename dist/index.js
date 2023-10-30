"use strict";

function isStrongPassword(password) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$minUppercase = options.minUppercase,
    minUppercase = _options$minUppercase === void 0 ? 1 : _options$minUppercase,
    _options$minLowercase = options.minLowercase,
    minLowercase = _options$minLowercase === void 0 ? 1 : _options$minLowercase,
    _options$minDigits = options.minDigits,
    minDigits = _options$minDigits === void 0 ? 1 : _options$minDigits,
    _options$minSpecialCh = options.minSpecialChars,
    minSpecialChars = _options$minSpecialCh === void 0 ? 1 : _options$minSpecialCh,
    _options$minLength = options.minLength,
    minLength = _options$minLength === void 0 ? 8 : _options$minLength;
  var hasUppercase = /[A-Z]/g;
  var hasLowercase = /[a-z]/g;
  var hasDigit = /\d/g;
  var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
  var messages = [];
  if ((password.match(hasUppercase) || []).length < minUppercase) {
    messages.push("Password must contain at least " + minUppercase + " uppercase letter(s).");
  }
  if ((password.match(hasLowercase) || []).length < minLowercase) {
    messages.push("Password must contain at least " + minLowercase + " lowercase letter(s).");
  }
  if ((password.match(hasDigit) || []).length < minDigits) {
    messages.push("Password must contain at least " + minDigits + " digit(s).");
  }
  if ((password.match(hasSpecialChar) || []).length < minSpecialChars) {
    messages.push("Password must contain at least " + minSpecialChars + " special character(s).");
  }
  if (password.length < minLength) {
    messages.push("Password must be at least " + minLength + " characters long.");
  }
  return {
    isValid: messages.length === 0,
    messages: messages
  };
}
module.exports = {
  isStrongPassword: isStrongPassword
};