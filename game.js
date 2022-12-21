

class Ship{
    constructor(name, hull, firepower, accuracy, speed){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.speed = speed;
    }
}
let USS_Blinky = new Ship("USS_Blinky", 20, 5, 0.7);

class Fleet{
    constructor(){
        this.ships = [];
    }
    addShip(name){
        let hull = Math.floor(Math.random() * (6 - 3 + 1) + 14);
        let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        let speed = Math.floor(Math.random() * (6 - 3 + 1) + 10)
        const alienShip = new Ship(name, hull, firepower, accuracy);
        this.ships.push(alienShip);
    }
}
let alienFleet = new Fleet();
alienFleet.addShip("Ship1");
alienFleet.addShip("Ship2");
alienFleet.addShip("Ship3");
alienFleet.addShip("Ship4");
alienFleet.addShip("Ship5");

let defeated = false;
for (let i=0; i<alienFleet.ships.length; i++){
    if(defeated == true){
        console.log("Alien Ship Has Been Destroyed");
        break;
    }
    while(defeated !=true){
        if(USS_Blinky.accuracy > Math.random()){
            alienFleet.ships[i].hull = alienFleet.ships[i].hull - USS_Blinky.firepower;
            if(alienFleet.ships[i].hull <=0){
                console.log(alienFleet.ships[i].name + "has lost");
                break;
            }
            else if (alienFleet.ships[i].hull !=0 && alienFleet.ships[i].accuracy > Math.random()){
                USS_Blinky.hull = USS_Blinky - alienFleet.ships[i].firepower;
            }
            if(USS_Blinky.hull <= 0){
                defeated = true;
            }
        }
    }
}