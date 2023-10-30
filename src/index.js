function isStrongPassword(password, options = {}) {
    const {
        minUppercase = 1,
        minLowercase = 1,
        minDigits = 1,
        minSpecialChars = 1,
        minLength = 8,
    } = options;

    const hasUppercase = /[A-Z]/g;
    const hasLowercase = /[a-z]/g;
    const hasDigit = /\d/g;
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;

    const messages = [];

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
        messages,
    };
}

module.exports = { isStrongPassword };
