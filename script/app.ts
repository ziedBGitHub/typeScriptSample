console.log('Hello Word!');

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
