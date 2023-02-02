function getComputerChoice(cpu) {
let moves = ['rock','paper','scissors']
let move = moves[~~(Math.random() * moves.length)]
let element = document.querySelector(".cpumove"); // 🪨 ✂️ 📰
if (move == 'rock') {
  element.textContent = "🪨"
} else if (move == 'paper') {
  element.textContent = "📰"
} else if (move == 'scissors') {
  element.textContent = "✂️"
}
return move
}

let ps = 0
let cps = 0
let ties = 0
let round = 1

function endGame() {
  
}

function updateScore() {
  let title = document.querySelector(".title"); // score
  let score = document.querySelector(".score"); // rounds
  let cpu = document.querySelector(".cput");
  let plr = document.querySelector(".plrt");

  title.textContent = "Score: " + ps + " - " + cps
  score.textContent = "Round " + round

  if (ps > cps) {
    
    } else if (cps > ps) {
    
    } else if (cps === ps) {
   
    }

  if (round >= 5) {
    endGame()
  }
}

function clickHandler(e) {
  let move = e.target.className
  let element = document.querySelector(".plrmove"); // 🪨 ✂️ 📰
  if (move == 'rock') {
    element.textContent = "🪨"
  } else if (move == 'paper') {
    element.textContent = "📰"
  } else if (move == 'scissors') {
    element.textContent = "✂️"
  }
  game(move)
}

document.querySelectorAll("button").forEach((el) => el.addEventListener("click",clickHandler));

function announce(str) {
  if (typeof str !== "string" || typeof bool !== "boolean" ) {
    return "ERROR - Announcement requires a string and boolean."
  }
 let element = document.querySelector(".result");
 element.textContent = str;
//  if (bool === true) {
//   return str
//  }
}

function rps(player, cpu) {
 if (typeof player === "string" && typeof cpu === "string") {
 let plr = player.toLowerCase()
 let cp = cpu.toLowerCase()
  if (cp === "scissors" && plr === "rock" || cp === "paper" && plr === "scissors" || cp === "rock" && plr === "paper" ) {
    ++ps
    announce("You win. " + plr.replace(plr[0],plr[0].toUpperCase())  + " beats " + cp.replace(cp[0],cp[0].toUpperCase()) + ".")
  } else if (plr === "scissors" && cp === "rock" || plr === "paper" && cp === "scissors" || plr === "rock" && cp === "paper" )  {  
    ++cps
    announce("You lose. " + cp.replace(cp[0],cp[0].toUpperCase())  + " beats " + plr.replace(plr[0],plr[0].toUpperCase()) + ".")
  } else if (plr === cp) {  
    ++ties
    announce("Tie.")
  } else {
    announce("Invalid inputs.")
  }
 }
}

function game(playerSelection) {
   // for (let i = 0; i < 5; i++) {
        // let playerSelection = prompt("Input rock, paper, or scissors - spell it exact.") // "rock"; // testing
        // while (typeof playerSelection !== "string" || (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors")) {
        //     playerSelection = prompt("Input rock, paper, or scissors - spell it exact.")
        //     if (typeof playerSelection === "string") {
        //         if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper") {
        //         break;
        //         }
        //     }
        // }
        const computerSelection = getComputerChoice();
        ++round
        updateScore()
        // console.log(rps(playerSelection, computerSelection));
   // }

    // if (ps > cps) {
    // alert("You win! Score: " + ps + " - " + cps + " | Ties: " + ties )
    // } else if (cps > ps) {
    // alert("You lose. Score: " + ps + " - " + cps + " | Ties: " + ties )
    // } else if (cps === ps) {
    // alert("Draw. Score: " + ps + " - " + cps + " | Ties: " + ties )
    // }
}
