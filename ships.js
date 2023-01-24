class Ship{
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
let USS_Blinky = new Ship("USS_Blinky", 20, 2, 0.7);
let enemyShip = new Ship("Enemy_Ship", 11, 5, 0.4);

Ship.prototype.attackCharacter = function(defender) {


}

function show_explosion1() {
    alert("Earth is Doomed!");
    document.getElementById("uss_blinky_img").style.display = "none";
    document.getElementById("explosion1_img").style.display = "block";
}

// function attack() {
//     enemy_ship.forEach((el) => {
//         el.hull = 2*el.hull;
//     });
//     alert(enemy_ship.hull);
// }


var round = 1;






class Fleet{
    constructor(){
        this.ships = [];
    }
    addShip(name){
        let hull = Math.floor(Math.random() * (6 - 3 + 1) + 14);
        let firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
        const alienShip = new Ship(name, hull, firepower, accuracy);
        this.ships.push(alienShip);
    }
};


let alienFleet = new Fleet();
alienFleet.addShip("Ship1");
alienFleet.addShip("Ship2");
alienFleet.addShip("Ship3");
alienFleet.addShip("Ship4");
alienFleet.addShip("Ship5");

let ussHullHtml = document.getElementById("uss_blinky_hull");
let alienShipHullHtml = document.getElementById("enemy_ship_hull");



function battle() {
    let ussDefeated = false;
    for (let i=0; i<alienFleet.ships.length; i++){

        //if uss is defeated, quit looking through ships
        if(ussDefeated == true){
            break;
        }
        let alienDefeated = false;
        while(ussDefeated !=true && alienDefeated !=true){
            if(USS_Blinky.accuracy > Math.random()){
                alienFleet.ships[i].hull = alienFleet.ships[i].hull - USS_Blinky.firepower;
                alienShipHullHtml.textContent = `Hull = ${alienFleet.ships[i].hull}`
                console.log("alien ship has been hit", enemyShip.hull)
                if(alienFleet.ships[i].hull <=0){
                    alert(alienFleet.ships[i].name + " has lost");
                    alienDefeated = true
                    break;
                } else if (alienFleet.ships[i].accuracy > Math.random()){
                    USS_Blinky.hull = USS_Blinky.hull - alienFleet.ships[i].firepower;
                    ussHullHtml.textContent = `Hull = ${USS_Blinky.hull}`
                    console.log("uss blinky has been hit", USS_Blinky.hull)
                }
                if(USS_Blinky.hull <= 0){
                    ussDefeated = true;
                    show_explosion1()
                    break;
                }
            }
        }
    };
    
}

let attackButton = document.getElementById("attack_button")
console.log(attackButton)

attackButton.addEventListener("click", () => {
    battle();
})


function endGame(winner, loser) {
    alert("Victory!");
    alert(winner.name + "has defeated" + loser.name + "with" + winner.hull + "hull remaining!");
}