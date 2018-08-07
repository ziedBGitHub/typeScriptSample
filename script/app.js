"use strict";
console.log('Hello Word!');
// Testing variable type
var x = "Hello Word";
//x = null;
x = '44';
// test type assertions
var value = 5;
var fixedString = value.toFixed(5);
console.log(fixedString);
var otherValue = 5;
var otherFixedString = otherValue.toFixed(5);
console.log(otherFixedString);
//other kind of type assertions
var myElement = document.getElementById("someValue");
myElement.innerText = "zied";
//testing functions
//get value from input text
function getInputValue(elementName) {
    var element = document.getElementById(elementName);
    if (element.value === '') {
        return undefined;
    }
    return element.value;
}
//display playerName and associated score
function getPlayerScore(name, score) {
    if (name === void 0) { name = "anonyme"; }
    if (score === void 0) { score = 100; }
    var scoreElement = document.getElementById('someValue');
    scoreElement.innerText = name + " -- " + score;
}
//submit button listener
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function () {
    var playerName = getInputValue('playerName');
    getPlayerScore(playerName);
});
