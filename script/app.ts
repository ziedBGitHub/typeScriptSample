/// <reference path="player.ts" />
/// <reference path="person.ts" />
/// <reference path="result.ts" />


// Testing variable type
let x: string = "Hello Word";
//x = null;
x = '44';

// test type assertions
let value: any = 5;
let fixedString: string = (<number>value).toFixed(5);
console.log(fixedString);

let otherValue: any = 5; 
let otherFixedString: string = (otherValue as number).toFixed(5);
console.log(otherFixedString);

//other kind of type assertions
var myElement: HTMLElement | null  = document.getElementById("someValue");
myElement!.innerText = "zied";

//testing functions

//get value from input text
function getInputValue(elementName: string): string | undefined {
    let element: HTMLInputElement = <HTMLInputElement>document.getElementById(elementName);
    if (element.value === '') {
        return undefined
    }
    return element.value;
}

//display playerName and associated score
function getPlayerScore(name: string = "anonyme", score: number = 100): void {
    let scoreElement: HTMLElement | null = document.getElementById('someValue');
    scoreElement!.innerText = `${name} -- ${score}`;
}

//submit button listener
let submitBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
submitBtn.addEventListener('click', () => { 
    let playerName = getInputValue('playerName');
    getPlayerScore(playerName);
})

//ARROW FUNCTIONS

// Arrow function with one parameter
let square = (x: number): void => console.log(x * x);
square(5);

//Arrow function with 2 parameters
let addition = (a: number, b: number): void => console.log(a + b);
addition(2, 3);

//Arrow function without parameters
let sayHello = (): void => console.log("Hello !");
sayHello();

//function declaration

let logMessage = (message: string) => console.log(message);
let logError = (information: string) => console.error(information);

let scores: number[] = [120, 80, 110, 50];

let logger: (message: string) => void;
scores.forEach(item => {
    logger = item >= 100 ? logMessage : logError;
    logger(`the score is: ${item}`);
});

// CUSTOM TYPES (INTERFACES & CLASSES)

//interfaces (see Person.ts and Result.ts)

// initialization 

let myResult: Result = {
    score: 10,
    gameDuration: 60,
    game: 'my Game' 
}

let myPlayer: Person = {
      name: 'zied',
      experience: () => "2 years"
}

//class (see Player.ts)

let myPlayer2: Player = new Player();
myPlayer2.name = "zied";
myPlayer2.numberGames = 2;
console.log("name: ", myPlayer2.name);
console.log("name: ", myPlayer2.experience());


