 class PigGame {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  firstPlayerProfile = undefined;
  secondPlayerProfile = undefined;
  gameReady = true;
  validForm = false;

  btnRoll(dice, secondDice) {
    if (this.gameReady) {
      if (dice !== 1 && secondDice !== 1) {
        this.roundScore += dice + secondDice;
        return this.roundScore;
      } else {
        return "nextPlayer";
      }
    }
    return "Game not started";
  }

  btnHold(finalScore) {
    let winningScore;

    if (this.gameReady) {
      this.scores[this.activePlayer] += roundScore;

      if (finalScore) {
        winningScore = finalScore;
      } else {
        winningScore = 100;
      }

      if (this.scores[this.activePlayer] >= winningScore) {
        this.gameReady = false;
        return {"winner": this.scores[this.activePlayer]};
      } else {
        return {"nextPlayer": this.scores[this.activePlayer]};
      }
    }
  }

  savePlayer(valid, playerProfile) {
    if (valid) {
      if (playerProfile['playerId'] == "firstPlayer") {
        this.firstPlayerProfile = playerProfile;
      } else if (playerProfile == "secondPlayer") {
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
    return "next player"
  }

  formValidation(playerProfile) {
    let username, age, email, gameExperience;

    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          username = playerProfile[0];
        case 1:
          age = playerProfile[1];
        case 2:
          email = playerProfile[2];
        case 3:
          gameExperience = playerProfile[3];
      }
    }

    if (typeof username == "string" && username.length >= 3 && username.length <= 25) {
      this.validForm = true;
      if (typeof age == "number" && age > 1 && age < 100) {
          this.validForm = true;
          if (typeof email == "string" && email.length > 5 && email.length < 255) {
              this.validForm = true;
              if (typeof gameExperience == "number" && gameExperience > 0 && gameExperience <= 5) {
                  this.validForm = true;
                } else {
                  this.validForm = false;
                  $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[3]);
                }
            } else {
              this.validForm = false;
              $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[2]);
            }
        } else {
          this.validForm = false;
          $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[1]);
        }
    } else {
      this.validForm = false;
      $('<p id="error-message" style="font-size: 14px;color:red">Invalid input</p>').insertAfter($(`form.${playerProfile} input`)[0]);
    }
    return this.validForm;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}