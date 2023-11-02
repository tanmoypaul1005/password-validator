<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    result.messages.forEach message => {
        console.log(message);
    });
}</code></pre>
            </li>
        </ol>
    </section>
    <section id="reactjs-usage">
        <h2>Using genie-password-validator in a React.js Project</h2>
        <p>If you're working on a React.js project and need to implement password validation, you can use the `genie-password-validator` package as follows:</p>
        <ol>
            <li>Install the package in your React project using npm:</li>
            <pre><code>npm install genie-password-validator</code></pre>
            <li>Import the `isStrongPassword` function in your React component where you need password validation.</li>
            <pre><code>
import { isStrongPassword } from 'genie-password-validator';
            </code></pre>
            <li>Use the function to validate passwords in your React component, such as during user registration or password change processes. Here's a simple example:</li>
            <pre><code>
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
}
            </code></pre>
        </ol>
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
