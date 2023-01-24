class Battle {
    constructor() {

    }

    createElement() {  
        this.element = document.createElement("div");
        this.element.classList.add("Battle");
        this.element.innerHTML = (`
            <div class="Battle_hero">
            <img src="${'/images/ships/USS_Blinky.png'}" alt="Hero" />
            </div>
            <div class="Battle_enemy">
            <img src="${'/images/ships/enemy_ship.png'}" alt="Enemy" />
            </div>
            `)
    }

    Init(container) {

    }

}


//attack sequence

function attack_squence() {
    
}



////////////////////
number = 0;
const animations =['images/vfx/explosion1.gif',
    'images/vfx/laser.gif'
];

// function show_explosion1(){
//     document.getElementById('explosion1')
//     .style.display = ("show");
//     }




//game over from concede button

function concede_button1() {
    hide_uss_blinky();
    show_explosion1();
}


// const attack_btn = document.getElementById("concede_button");
// attack_btn.addEventListener("click", show_explosion1, hide_uss_blinky);

function show_explosion1() {
    alert("Earth is Doomed!");
    document.getElementById("explosion1_img").style.display = "block";
}

function hide_uss_blinky() {
    document.getElementById("uss_blinky_img").style.display = "none";
}

//----------------------------
//show earth exploding after a concede


//----------------------------


//game over from defeated

function gameover() {
    if (defeated = true) {
        show_explosion1();
    }
}








//---tries on hiding uss_blinky when explosion onClick occurs

// function hide_uss_blinky() {
//         document.getElementById("USS_Blinky").style.display = "hide";
// }

// function myFunction() {
//     if alert("Earth is Doomed!") {
//         document.getElementById("USS_Blinky").style.display = "hide";
//     }
//     return();
// }


// if (!show_explosion1.called) {
//     show_explosion1.called = true;
//     show_explosion1();
// }



// function callItOnce(fn) {
//     var called = false;
//     return function() {
//         if (!called) {
//             called = true;
//             return fn();
//         }
//         return;
//     }
// }