let scores, roundScore, activePlayer, gamePlaying;
let firstPlayerProfile, secondPlayerProfile, gameReady;
let validForm;

init();

document.querySelector(".btn-roll").addEventListener("click", btnRoll);
document.querySelector(".btn-hold").addEventListener("click", btnHold);
document.querySelector(".btn-new").addEventListener("click", init);
document.querySelector(".btn-changeUsers").addEventListener("click", changeUsers);

function btnRoll() {
  if (gamePlaying) {
    let dice = getRandomIntInclusive(1, 6),
      diceDOM = document.querySelector(".dice");
    let secondDice = getRandomIntInclusive(1, 6),
      dice2DOM = document.querySelector(".secondDice");

    diceDOM.style.display = "block";
    dice2DOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    dice2DOM.src = "dice-" + secondDice + ".png";

    if (dice !== 1 && secondDice !== 1) {
      roundScore += dice + secondDice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}

function btnHold() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    let input = document.querySelector(".final-score").value;
    let winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".secondDice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
}

function savePlayer(playerProfile) {
  valid = formValidation(playerProfile);

  if (valid) {
    if (playerProfile == "firstPlayer") {
      firstPlayerProfile = $(`form.${playerProfile}`).serializeArray();
    } else if (playerProfile == "secondPlayer") {
      secondPlayerProfile = $(`form.${playerProfile}`).serializeArray();
    }

    if (firstPlayerProfile != undefined && secondPlayerProfile != undefined) {
      gameReady = true;
      enableGame();
    }
  } else {
    return "Not valid player"
  }
}

function changeUsers(){
    init();
    disableGame();
    return "Change of users profile"
}

function formValidation(playerProfile) {
  let username, age, email, gameExperience;
  $("p[id=error-message]").remove();

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        username = $(`form.${playerProfile} input`)[i].value;
      case 1:
        age = parseInt($(`form.${playerProfile} input`)[i].value, 10);
      case 2:
        email = $(`form.${playerProfile} input`)[i].value;
      case 3:
        gameExperience = parseInt($(`form.${playerProfile} input`)[i].value, 10);
    }
  }

  if (typeof username == "string" && username.length >= 3 && username.length <= 25) {
    validForm = true;
    if (typeof age == "number" && age > 1 && age < 100) {
        validForm = true;
        if (typeof email == "string" && email.length > 5 && email.length < 255) {
            validForm = true;
            if (typeof gameExperience == "number" && gameExperience > 0 && gameExperience <= 5) {
                validForm = true;
              } else {
                validForm = false;
                $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[3]);
              }
          } else {
            validForm = false;
            $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[2]);
          }
      } else {
        validForm = false;
        $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[1]);
      }
  } else {
    validForm = false;
    $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[0]);
  }
  return validForm;
}

function enableGame() {
  document.querySelector("#overlay").style.display = "none";
  return "Game enabled";
}

function disableGame() {
    document.querySelector("#overlay").style.display = "";
    return "Game disabled";
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".secondDice").style.display = "none";
  return "next player"
}

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  firstPlayerProfile = undefined;
  secondPlayerProfile = undefined;
  gameReady = false;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".secondDice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  return "Game initiated";
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
