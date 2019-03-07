// var name = prompt('Enter your name:');

// console.log(name);

var grille = new Array();

for (var i = 0; i < 10; i++)
    grille[i] = new Array();

for (var i = 0; i < 10; i++)

    for (var j = 0; j < 10; j++)
        grille[i][j] = 0;


function play(x) {
    for (let i = 9; i >= 0; i--) {
        if (grille[i][x] === 0) {
            if (turn === 1) {
                grille[i][x] = 1;
            } else if (turn === 2) {
                grille[i][x] = 2;
            }
            console.table(grille);
            break;
        } else {
            continue;
        }
    }
};

turn = 1;

var colonne = document.getElementById('colonne').value

function renvoi() {
    console.log(colonne)
}

renvoi();

function turnManager() {
    if (turn === 1) {

        // var playerChoice = prompt('Dans quelle colonne voulez vous jouer?')
        play(playerChoice);
        console.log('Vous jouez en colonne ' + playerChoice)
        turn += 1;
        console.log('Au tour de Ordinou')
    }

    if (turn === 2) {
        var machineChoice = Math.floor(Math.random() * 10)
        play(machineChoice);
        console.log('Ordinou a joué en colonne ' + machineChoice);
        turn -= 1;
        console.log('A votre tour')
    }
};

// Je dois trouver une alternative à la boucle WHILE et au Prompt pour éviter une boucle infinie

// while (turn <= 2) {
//     turnManager();
// }

// console.table(grille);

