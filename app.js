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
console.log(`The appears ${count} time's in string`)
