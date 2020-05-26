class PigGame {
  constructor() {
    this.scores = [0, 0];
    this.activePlayer = 0;
    this.roundScore = 0;
    this.firstPlayerProfile = undefined;
    this.secondPlayerProfile = undefined;
    this.gameReady = false;
    this.validForm = false;
  }

  btnRoll(dice, secondDice) {
    if(Number.isInteger(dice) == true && Number.isInteger(secondDice) == true){
      if (this.gameReady) {
        if (dice == 1 && secondDice == 1) {
          return "nextPlayer";
        } else {
          this.roundScore += dice + secondDice;
          return this.roundScore;
        }    
      }else{
        return "Game not started";
      }
    }
      return "Invalid input";
    }

  btnHold(finalScore) {
    if (finalScore>=10 && finalScore<=150){
      let winningScore;
      if (this.gameReady) {
        if (Number.isInteger(this.roundScore)) {
          this.scores[this.activePlayer] += this.roundScore;
        }

        if (finalScore) {
          winningScore = finalScore;
        } else {
          winningScore = 100;
        }

        if (this.scores[this.activePlayer] >= winningScore) {
          this.gameReady = false;
          return { winner: this.scores[this.activePlayer] };
        } else {
          this.roundScore = 0;
          return { nextPlayer: this.scores[this.activePlayer] };
        }
      }
    }else{
      return "Invalid final score";
    }
  }

  savePlayer(valid, playerProfile) {
    if (valid) {
      if (playerProfile["playerId"] == "firstPlayer") {
        this.firstPlayerProfile = playerProfile;
      } else if (playerProfile["playerId"] == "secondPlayer") {
        this.secondPlayerProfile = playerProfile;
      }
      if (this.firstPlayerProfile != undefined && this.secondPlayerProfile != undefined) {
        this.gameReady = true;
      }
      return "Player validated";
    } else {
      return "Not valid player";
    }
  }

  nextPlayer() {
    this.activePlayer === 0 ? (this.activePlayer = 1) : (this.activePlayer = 0);
    this.roundScore = 0;
  }

  formValidation(playerProfile) {
    let username, age, email, gameExperience;
    let playerId = playerProfile["playerId"];
    let usernameValid = false;
    let ageValid = false;
    let emailValid = false;
    let expValid = false;

    let invalid = {
      valid: this.validForm,
      playerId: [],
      input: [],
    };

    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          username = playerProfile["username"];
          if (typeof username == "string" && username.length >= 3 && username.length <= 25) {
            usernameValid = true;
            invalid["valid"] = this.validForm;
          } else {
            usernameValid = false;
            invalid["playerId"].push(playerId);
            invalid["input"].push(0);
          }
          break;
        case 1:
          age = playerProfile["age"];
          if (typeof age == "number" && age >= 1 && age <= 100) {
            ageValid = true;
            invalid["valid"] = this.validForm;
          } else {
            ageValid = false;
            invalid["playerId"].push(playerId);
            invalid["input"].push(1);
          }
          break;
        case 2:
          email = playerProfile["email"];
          if (typeof email == "string" && email.length >= 5 && email.length < 255) {
            emailValid = true;
            invalid["valid"] = this.validForm;
          } else {
            emailValid = false;
            invalid["playerId"].push(playerId);
            invalid["input"].push(2);
          }
          break;
        case 3:
          gameExperience = playerProfile["experience"];
          if (typeof gameExperience == "number" && gameExperience > 0 && gameExperience <= 5) {
            expValid = true;
            invalid["valid"] = this.validForm;
          } else {
            expValid = false;
            invalid["playerId"].push(playerId);
            invalid["input"].push(3);
          }
          break;
      }
    }

    if (usernameValid && ageValid && emailValid && expValid) {
      invalid["valid"] = true;
    } else {
      invalid["valid"] = false;
    }
    return invalid;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = { PigGame };
