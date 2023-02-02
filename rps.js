function removeTransition(e) {
  // if (e.propertyName !== 'transform') return;
  e.target.classList.remove('wt');
  e.target.classList.remove('lt');
}

const body = document.querySelector(".body");
body.addEventListener('transitionend', removeTransition);

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
  const cont = document.querySelector('.content');
  cont.style.gap = "3.5vh";
  // const plri = document.querySelector(".plrmove");
  // plri.classList.add("Shrink")
  // const c = document.querySelector(".cpumove");
  // c.classList.add("Shrink")
  const btns = document.querySelectorAll('button');
  for (i = 0; i < btns.length; ++i) {
    btns[i].classList.add("End")
  }
}

function updateScore() {
  const title = document.querySelector(".title"); // score
  const score = document.querySelector(".score"); // rounds
  const cpu = document.querySelector(".cput");
  const plr = document.querySelector(".plrt");
  const cpui = document.querySelector(".cpu");
  const plri = document.querySelector(".plr");
  const res = document.querySelector(".result");
  title.textContent = "Wins: " + ps + " | Losses: " + cps + " | Ties: " + ties
  score.textContent = "Round " + round

  if (ps > cps) {
      plr.classList.add("winning")
      cpu.classList.remove("winning")
    } else if (cps > ps) {
      cpu.classList.add("winning")
      plr.classList.remove("winning")
    } else if (cps === ps) {
      plr.classList.remove("winning")
      cpu.classList.remove("winning")
    }

  if (cps === 5) {
    endGame()
    cpui.textContent = "🤩"
    cpui.classList.add("Grow")
    plri.textContent = "😭"
    res.textContent = "CPU reached 5 wins. YOU LOST!"
  } else if (ps === 5) {
    endGame()
    plri.textContent = "🤩"
    plri.classList.add("Grow")
    cpui.textContent = "😭"
    res.textContent = "You reached 5 wins. YOU WIN!"
  }
}

function clickHandler(e) {
  let move = e.target.className
  // console.log(move)
  if (move !== "rock" && move !== "scissors" && move !== "paper") {
    return
  }
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
  if (typeof str !== "string" ) {
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
 const cpui = document.querySelector(".cpu");
 const plri = document.querySelector(".plr");
  if (cp === "scissors" && plr === "rock" || cp === "paper" && plr === "scissors" || cp === "rock" && plr === "paper" ) {
    ++ps
    plri.textContent = "😄"
    cpui.textContent = "🥲"
    body.classList.add("wt")
    announce("You win. " + plr.replace(plr[0],plr[0].toUpperCase())  + " beats " + cp.replace(cp[0],cp[0].toUpperCase()) + ".")
  } else if (plr === "scissors" && cp === "rock" || plr === "paper" && cp === "scissors" || plr === "rock" && cp === "paper" )  {  
    ++cps
    cpui.textContent = "😄"
    plri.textContent = "🥲"
    body.classList.add("lt")
    announce("You lose. " + cp.replace(cp[0],cp[0].toUpperCase())  + " beats " + plr.replace(plr[0],plr[0].toUpperCase()) + ".")
  } else if (plr === cp) {  
    ++ties
    plri.textContent = "😐"
    cpui.textContent = "😐"
    announce("TIE. Total Ties: " + ties)
  } else {
    announce("Invalid inputs.")
  }
  return round
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
        console.log(rps(playerSelection, computerSelection));
        ++round
        updateScore()
   // }

    // if (ps > cps) {
    // alert("You win! Score: " + ps + " - " + cps + " | Ties: " + ties )
    // } else if (cps > ps) {
    // alert("You lose. Score: " + ps + " - " + cps + " | Ties: " + ties )
    // } else if (cps === ps) {
    // alert("Draw. Score: " + ps + " - " + cps + " | Ties: " + ties )
    // }
}
