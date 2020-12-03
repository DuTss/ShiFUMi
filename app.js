//let userChoice = prompt("Choisissez entre papier, ciseau, caillou");
let computerChoice = Math.random()
if (computerChoice < 0.34) {
    computerChoice = "caillou"
} else if (computerChoice <= 0.67) {
    computerChoice = "papier"
} else {
    computerChoice = "ciseau"
}

console.log(computerChoice);