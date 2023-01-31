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

const playerSelection = "rock"; // testing
const computerSelection = getComputerChoice();
console.log(rps(playerSelection, computerSelection));