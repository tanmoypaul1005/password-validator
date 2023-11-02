<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        header {
            background-color: #007acc;
            color: #fff;
            text-align: center;
            padding: 20px;
        }

        header h1 {
            font-size: 36px;
        }

        header p {
            font-size: 18px;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
            font-size: 24px;
        }

        pre code {
            background-color: #f5f5f5;
            padding: 5px;
            display: block;
            overflow-x: auto;
            white-space: pre-wrap;
        }
    </style>
    <title>genie-password-validator Documentation</title>
</head>
<body>
    <header>
        <h1>genie-password-validator</h1>
        <p>A password validation library for JavaScript</p>
    </header>
    <section id="installation">
        <h2>Installation</h2>
        <pre><code>npm install genie-password-validator</code></pre>
    </section>
    <section id="usage">
        <h2>Usage</h2>
        <p>To use the `genie-password-validator` package in your project, follow these steps:</p>
        <ol>
            <li>Import the package into your code:
                <pre><code>const { isStrongPassword } = require("genie-password-validator");</code></pre>
            </li>
            <li>Define the password to be checked and an optional configuration object:
                <pre><code>const password = "YourPassword123!";
const options = {
    minUppercase: 1,
    minLowercase: 1,
    minDigits: 1,
    minSpecialChars: 1,
    minLength: 8,
};</code></pre>
            </li>
            <li>Call the `isStrongPassword` function and pass in the password and options:
                <pre><code>const result = isStrongPassword(password, options);</code></pre>
            </li>
            <li>You can then use the `result` object to handle the validation outcome in your code.
                <pre><code>if (result.isValid) {
    console.log("Password is strong and meets all criteria.");
} else {
    console.log("Password validation failed. Reasons:");
    result.messages.forEach(message => {
        console.log(message);
    });
}</code></pre>
            </li>
        </ol>
    </section>
    <section id="example">
        <h2>Example</h2>
        <p>Here's an example of using the `genie-password-validator` package to validate a password:</p>
        <pre><code>const { isStrongPassword } = require("genie-password-validator");

const password = "YourPassword123!";
const options = {
    minUppercase: 1,
    minLowercase: 1,
    minDigits: 1,
    minSpecialChars: 1,
    minLength: 8,
};

const result = isStrongPassword(password, options);

if (result.isValid) {
    console.log("Password is strong and meets all criteria.");
} else {
    console.log("Password validation failed. Reasons:");
    result.messages.forEach(message => {
        console.log(message);
    });
}</code></pre>
    </section>
    <section id="config">
        <h2>Configuration Options</h2>
        <p>You can configure the password validation by specifying the following options in the `options` object:</p>
        <ul>
            <li><b>minUppercase:</b> Minimum number of uppercase letters.</li>
            <li><b>minLowercase:</b> Minimum number of lowercase letters.</li>
            <li><b>minDigits:</b> Minimum number of digits.</li>
            <li><b>minSpecialChars:</b> Minimum number of special characters (e.g., !@#$%^&*()_+{}[]:;<>,.?~/-).</li>
            <li><b>minLength:</b> Minimum password length.</li>
        </ul>
    </section>
    <section id="license">
        <h2>License</h2>
        <p>This package is licensed under the MIT License. Feel free to use and contribute to it.</p>
    </section>
</body>
</html>
