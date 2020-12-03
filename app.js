// Choix utilisateur
//let userChoice = prompt("Choisissez entre papier, ciseau, caillou");

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
    
}
//console.log(compare(computerChoice,userChoice));

/*var sandwich = function(pain,viande,legumes,sauce) {
    return `Votre sandwich sera composé de: ${pain},${viande},${legumes},${sauce}`
}*/
var sandwich = function(params1,params2,params3,params4) {
    return `Votre sandwich sera composé de: ${params1},${params2},${params3},${params4}`
}
var parisien = sandwich("pain complet","jambon","salade","ketchup")
var vendeen = sandwich("pain de mie","saucisse",["salade","tomate","radis"],"Pas de sauce")

console.log("menu parisien:",parisien);
console.log("menu vendeen:",vendeen);