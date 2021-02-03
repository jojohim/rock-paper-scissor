//cash the dom

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}
function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertWords(user)}${smallUserWord} beats ${convertWords(computer)}${smallCompWord} .YOU WIN! 🏅`;

}

function loses(computer, user) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertWords(computer)}${smallCompWord} beats ${convertWords(user)}${smallUserWord} .YOU LOST 😢`;
}

function draw(user, computer) {
    console.log("DRAW");
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertWords(user)}${smallUserWord} equals ${convertWords(computer)}${smallCompWord} .IT'S A DRAW 🤷`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            console.log("USER WINS");
            win(userChoice, computerChoice);
        break;

        case "sr":
        case "ps":
        case "rp":
            console.log("USER LOSES");
            loses(computerChoice, userChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
                console.log("IT'S A DRAW");
                draw(userChoice, computerScore);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function() {
    game ("r");

    })

    paper_div.addEventListener('click', function() {
        game ("p");
        })

    scissors_div.addEventListener('click', function() {
        game ("s");
        })

}

main()
