let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userchoice) => {
  let compChoice = genCompChoice();
  console.log("comp choice=", compChoice);
  if (compChoice === userchoice) {
    //game draw
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      //userchoice="scissor"
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  let userchoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userchoice);
  });
});
