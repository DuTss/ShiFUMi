// Choix utilisateur
let userChoice = prompt("Choisissez entre papier, ciseau, caillou");

// Choix de l'ordinateur
let computerChoice = Math.random()

if (computerChoice < 0.34) {
    computerChoice = "caillou"
} else if (computerChoice <= 0.67) {
    computerChoice = "papier"
} else {
    computerChoice = "ciseau"
}

//console.log(computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "Egalité"
    }
    else if (choice1 === "caillou") {
        if (choice2 === "ciseau") {
            return "caillou gagne"
        } else if (choice2 === "papier") {
            return "papier gagne"
        }
    }
    else if (choice1 === "papier") {
        if (choice2 === "ciseau") {
            return "ciseau gagne"
        } else if (choice2 === "caillou") {
            return "papier gagne"
        }
    }
    else if (choice1 === "ciseau") {
        if (choice2 === "papier") {
            return "ciseau gagne"
        } else if (choice2 === "caillou") {
            return "caillou gagne"
        }
    }
}

console.log(compare(computerChoice,userChoice));

/*var sandwich = function(pain,viande,legumes,sauce) {
    return `Votre sandwich sera composé de: ${pain},${viande},${legumes},${sauce}`
}
var sandwich = function(params1,params2,params3,params4) {
    return `Votre sandwich sera composé de: ${params1},${params2},${params3},${params4}`
}
var parisien = sandwich("pain complet","jambon","salade","ketchup")
var vendeen = sandwich("pain de mie","saucisse",["salade","tomate","radis"],"Pas de sauce")

console.log("menu parisien:",parisien);
console.log("menu vendeen:",vendeen);*/