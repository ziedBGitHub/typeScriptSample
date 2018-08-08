"use strict";
/// <reference path="person.ts" />
var Player = /** @class */ (function () {
    function Player() {
        this.name = "Anonyme";
        this._numberGames = 0;
    }
    Object.defineProperty(Player.prototype, "numberGames", {
        get: function () {
            return this._numberGames;
        },
        set: function (games) {
            this._numberGames = games;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.experience = function () {
        return String(this.numberGames) + " years";
    };
    return Player;
}());
/// <reference path="player.ts" />
/// <reference path="person.ts" />
/// <reference path="result.ts" />
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
//ARROW FUNCTIONS
// Arrow function with one parameter
var square = function (x) { return console.log(x * x); };
square(5);
//Arrow function with 2 parameters
var addition = function (a, b) { return console.log(a + b); };
addition(2, 3);
//Arrow function without parameters
var sayHello = function () { return console.log("Hello !"); };
sayHello();
//function declaration
var logMessage = function (message) { return console.log(message); };
var logError = function (information) { return console.error(information); };
var scores = [120, 80, 110, 50];
var logger;
scores.forEach(function (item) {
    logger = item >= 100 ? logMessage : logError;
    logger("the score is: " + item);
});
// CUSTOM TYPES (INTERFACES & CLASSES)
//interfaces (see Person.ts and Result.ts)
// initialization 
var myResult = {
    score: 10,
    gameDuration: 60,
    game: 'my Game'
};
var myPlayer = {
    name: 'zied',
    experience: function () { return "2 years"; }
};
//class (see Player.ts)
var myPlayer2 = new Player();
myPlayer2.name = "zied";
myPlayer2.numberGames = 2;
console.log("name: ", myPlayer2.name);
console.log("name: ", myPlayer2.experience());
