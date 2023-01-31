function getComputerChoice(cpu) {
let moves = ['rock','paper','scissors']
return moves[~~(Math.random() * moves.length)]
}

function rps(player, cpu) {
 if (typeof player === "string" && typeof cpu === "string") {
 let plr = player.toLowerCase()
 let cp = cpu.toLowerCase()
  if (cp === "scissors" && plr === "rock" || cp === "paper" && plr === "scissors" || cp === "rock" && plr === "paper" ) {
    return "You win. " + plr.replace(plr[0],plr[0].toUpperCase())  + " beats " + cp.replace(cp[0],cp[0].toUpperCase()) + "."
  } else if (plr === "scissors" && cp === "rock" || plr === "paper" && cp === "scissors" || plr === "rock" && cp === "paper" )  {  
    return "You lose. " + cp.replace(cp[0],cp[0].toUpperCase())  + " beats " + plr.replace(plr[0],plr[0].toUpperCase()) + "."
  } else if (plr === cp) {  
    return "Tie."
  } else {
    return "Invalid inputs.";
  }
 }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input rock, paper, or scissors - spell it exact.") // "rock"; // testing
        while (typeof playerSelection !== "string" || (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors")) {
            playerSelection = prompt("Input rock, paper, or scissors - spell it exact.")
            if (typeof playerSelection === "string") {
                if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper") {
                break;
                }
            }
        }
        const computerSelection = getComputerChoice();
        console.log(rps(playerSelection, computerSelection));
    }
    alert("Game over. Refresh the page.")
}
game()