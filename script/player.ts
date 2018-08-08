/// <reference path="person.ts" />

class Player implements Person {
    name: string = "Anonyme";
    age?: number;
    private _numberGames: number = 0;

    get numberGames() {
        return this._numberGames;
    }

    set numberGames(games: number) {
        this._numberGames = games;
    }

    experience(){
        return String(this.numberGames) + " years";
    } 

}