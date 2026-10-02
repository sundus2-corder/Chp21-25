```javascript
// -------------------------- Chapter 21-25 String Methods ---------------------------

// 1. Take the user's first and last name, combine them into fullName, and greet the user.

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName + " " + lastName;
alert("Hello! " + fullName);


// 2. Ask the user for their favorite mobile phone model and display the length of the input.

var favMobile = prompt("Enter your favorite mobile phone model: ");
document.write("My favorite phone is: " + favMobile + "<br>");
document.write("Length of string: " + favMobile.length);


// 3. Find the index of the letter "n" in the word "Pakistani".

var str = "Pakistani";
var nIndex = str.indexOf("n");
document.write("String: " + str + "<br>");
document.write("Index of 'n': " + nIndex);


// 4. Find the last index of the letter "l" in "Hello World".

var str = "Hello World";
var lIndex = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + lIndex);


// 5. Find the character at index 3 in the word "Pakistani".

var str = "Pakistani";
var Index = str[3];
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + Index);


// 6. Repeat question 1 using the concat() method.

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName.concat(lastName);
alert("Hello! " + fullName);


// 7. Replace "Hyder" with "Islam" in the word "Hyderabad".

var str = "Hyderabad";
var replaceStr = str.replace("Hyder", "Islam");
document.write("City: " + str + "<br>");
document.write("After replacement: " + replaceStr);


// 8. Replace "Hyder" with "Islam" in the word "Hyderabad" and display the result.

var str = "Hyderabad";
var replaceStr = str.replace("Hyder", "Islam");
document.write("City: " + str + "<br>");
document.write("After replacement: " + replaceStr);


// 9. Convert the string "472" into the number 472 and display their values and types.

var str = "472";
var num = Number(str);

document.write("Value: " + str + "<br>");
document.write("Type: " + typeof(str) + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num) + "<br>");


// 10. Take user input and convert it into uppercase letters.

var str = prompt("Enter Input: ");
document.write("User input: " + str + "<br>");
document.write("Upper case: " + str.toUpperCase());


// 11. Take user input and convert it into title case.

var str = prompt("Enter Input: ");
var firstChar = str.slice(0, 1);
var otherChar = str.slice(1);
var title = firstChar.toUpperCase() + otherChar.toLowerCase();

document.write("User input: " + str + "<br>");
document.write("Title case: " + title);


// 12. Convert 35.36 into a string, remove the decimal point, and display 3536.

var num = 35.36;
var str = num.toString();
var dotIndex = str.indexOf(".");

str = str.slice(0, dotIndex) + str.slice(dotIndex + 1);

document.write("Number: " + num + "<br>");
document.write("Result: " + str);


// 13. Take a username and check whether it contains @, ., , or !.

var username = prompt("Enter your name: ");
var charValue;

for (var i = 0; i < username.length; i++) {
    charValue = username[i].charCodeAt(0);

    if (
        charValue === 33 ||
        charValue === 44 ||
        charValue === 46 ||
        charValue === 64
    ) {
        alert("Please enter a valid username");
    }
}


// 14. Search for an item entered by the user in the bakery list and display whether it is available.

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var query = prompt("What do you want to order: ");

query = query.toLowerCase();

var check = false;

for (var i = 0; i < arr.length; i++) {

    if (query === arr[i]) {

        document.write(
            arr[i] + " is available at index " + i + " in our bakery"
        );

        check = true;
    }
}

if (check === false) {
    document.write(
        "We are sorry. " + query + " is not available in our bakery"
    );
}


// 15. Validate a password using alphabet, number, length, and starting-character requirements.

var password = prompt("Enter your password: ");

var passwordLength = false;
var passwordChar = false;
var passwordInt = false;
var passwordStart = true;


// Check for alphabets

for (var i = 0; i < password.length; i++) {

    var charValue = password[i].charCodeAt(0);

    if (charValue >= 65 && charValue <= 90) {
        passwordChar = true;
    }

    else if (charValue >= 97 && charValue <= 122) {
        passwordChar = true;
    }
}


// Check for numbers

for (var i = 0; i < password.length; i++) {

    var charValue = password[i].charCodeAt(0);

    if (charValue >= 48 && charValue <= 57) {
        passwordInt = true;
    }
}


// Check whether the first character is a number

var charValue = password.charCodeAt(0);

if (charValue >= 48 && charValue <= 57) {
    passwordStart = false;
}


// Check password length

if (password.length >= 6) {
    passwordLength = true;
}


// Validate password

if (
    passwordChar === false ||
    passwordInt === false ||
    passwordLength === false ||
    passwordStart === false
) {
    alert("Enter valid Password");
}

else {
    alert("Password Approved");
}


// 16. Convert "University of Karachi" into an array using split() and display every character separately.

var str = "University of Karachi";

var arr = str.split("");

document.write(arr);

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}


// 17. Take user input and display the last character of the entered text.

var str = prompt("Enter your message: ");

document.write("User Input: " + str + "<br>");

document.write(
    "Last character of input: " + str[str.length - 1]
);


// 18. Count the number of occurrences of the word "the" in the given sentence.

var str = "the quick brown fox jumps over the lazy dog";
var words = str.toLowerCase().split("");
var count = 0 ;
for(i=0;i<words.length;i++){
count++
}
console.log(`The appears ${count} time's in string`);

/**
 * JAVASCRIPT MATH METHODS ASSIGNMENT (Questions 1-8)
 */

// ============================================================================
// 1. Positive Integer Math Operations
// ============================================================================
function runPositiveNumOperations() {
    let userInput = prompt("Q1: Enter a positive floating-point number (e.g., 3.4567):");
    let num = parseFloat(userInput);

    if (num > 0) {
        document.write("<h3>Question 1: Positive Number</h3>");
        document.write(`number: ${num}<br>`);
        document.write(`round off value: ${Math.round(num)}<br>`);
        document.write(`floor value: ${Math.floor(num)}<br>`);
        document.write(`ceil value: ${Math.ceil(num)}<br><hr>`);
    } else {
        alert("Invalid input! Please provide a positive number.");
    }
}

// ============================================================================
// 2. Negative Floating Point Math Operations
// ============================================================================
function runNegativeNumOperations() {
    let userInput = prompt("Q2: Enter a negative floating-point number (e.g., -2.673):");
    let num = parseFloat(userInput);

    if (num < 0) {
        document.write("<h3>Question 2: Negative Number</h3>");
        document.write(`number: ${num}<br>`);
        document.write(`round off value: ${Math.round(num)}<br>`);
        document.write(`floor value: ${Math.floor(num)}<br>`);
        document.write(`ceil value: ${Math.ceil(num)}<br><hr>`);
    } else {
        alert("Invalid input! Please provide a negative floating-point number.");
    }
}

// ============================================================================
// 3. Absolute Value
// ============================================================================
function displayAbsoluteValue() {
    let userInput = prompt("Q3: Enter a number to find its absolute value:");
    let num = parseFloat(userInput);

    if (!isNaN(num)) {
        document.write("<h3>Question 3: Absolute Value</h3>");
        document.write(`The absolute value of ${num} is ${Math.abs(num)}<br><hr>`);
    } else {
        alert("Invalid input! Please enter a valid number.");
    }
}

// ============================================================================
// 4. Dice Simulator
// ============================================================================
function simulateDiceRoll() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    
    document.write("<h3>Question 4: Dice Simulator</h3>");
    document.write(`random dice value: ${diceValue}<br><hr>`);
}

// ============================================================================
// 5. Coin Toss Simulator
// ============================================================================
function simulateCoinToss() {
    let tossValue = Math.floor(Math.random() * 2) + 1;

    document.write("<h3>Question 5: Coin Toss Simulator</h3>");
    if (tossValue === 2) {
        document.write(`${tossValue}<br>random coin value: Heads<br><hr>`);
    } else {
        document.write(`${tossValue}<br>random coin value: Tails<br><hr>`);
    }
}

// ============================================================================
// 6. Random Number (1 to 100)
// ============================================================================
function displayRandom1To100() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    document.write("<h3>Question 6: Random Number (1-100)</h3>");
    document.write(`random number between 1 and 100: ${randomNumber}<br><hr>`);
}

// ============================================================================
// 7. Weight Parser
// ============================================================================
function parseUserWeight() {
    let userInput = prompt("Q7: Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
    let weight = parseFloat(userInput);

    document.write("<h3>Question 7: Weight Parser</h3>");
    if (!isNaN(weight)) {
        document.write(`The weight of user is ${weight} kilograms<br><hr>`);
    } else {
        document.write("Could not parse a valid weight number.<br><hr>");
    }
}

// ============================================================================
// 8. Secret Guessing Game
// ============================================================================
function runSecretGuessGame() {
    let secretNum = Math.floor(Math.random() * 10) + 1;
    let userGuess = parseInt(prompt("Q8: Guess a secret number between 1 and 10:"));

    document.write("<h3>Question 8: Secret Guessing Game</h3>");
    if (userGuess === secretNum) {
        document.write("<strong>Congratulations!</strong> You guessed the secret number!<br>");
        alert("Congratulations! You guessed the secret number!");
    } else {
        document.write(`Game Over. The correct secret number was ${secretNum}.<br>`);
        alert(`Try again! The secret number was ${secretNum}.`);
    }
}


