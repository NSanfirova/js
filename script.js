/*const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr = "This is the start. "+"This is the end."; // Change this line

let myStr = "This is the first sentence. ";
myStr +="This is the second sentence.";

// Only change code below this line
const myName = "Nadezhda ";
const myStr = "My name is " +myName + "and I am well!";
const someAdjective = "very cool!";
let myStr = "Learning to code is ";
myStr+= someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;*/

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
console.log(thirdLetterOfLastName);

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
console.log(lastLetterOfLastName);

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
console.log(secondToLastLetterOfLastName);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " +myNoun+" "+myVerb+" "+myAdverb; // Change this line
// Only change code above this line
console.log(wordBlanks)

// Only change code below this line
const myArray = ["jelly", 2];





/*BUTTLESHIP*/
 let location1 = 3;
 let location2 = 4;
 let location3 = 5;
 let guess;
 let hits = 0;
 let guesses = 0;
 let isSunk = false;

 while (isSunk == false) {
    guess = prompt ("Огонь! (Введите число от 0 до 6)");
    if (guess < 0 || guess > 6) {
        alert ("Читать умеешь? От 0 до 6!!!!!!!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert ("Попал!!!");
            hits = hits +1;
            if (hits == 3) {
                isSunk = true;
                alert("Ты утопил мой корабль (((((")
            }
        } else {
            alert("Промазал!!!!! )))))))");
        }
    }
 }
let stats = "Тебе потребовалось " +guesses + " выстрелов, чтобы утопить мой корабль!";
alert(stats);
