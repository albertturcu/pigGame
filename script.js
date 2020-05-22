 class PigGame {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  firstPlayerProfile = undefined;
  secondPlayerProfile = undefined;
  gameReady = false;
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
      if(Number.isInteger(this.roundScore)){
        this.scores[this.activePlayer] += this.roundScore;
      }

      if (finalScore) {
        winningScore = finalScore;
      } else {
        winningScore = 100;
      }

      if (this.scores[this.activePlayer] >= winningScore) {
        this.gameReady = false;
        return {"winner": this.scores[this.activePlayer]};
      } else {
        this.roundScore = 0;
        return {"nextPlayer": this.scores[this.activePlayer]};
      }
    }
  }

  savePlayer(valid, playerProfile) {
    if (valid) {
      if (playerProfile['playerId'] == "firstPlayer") {
        this.firstPlayerProfile = playerProfile;
      } else if (playerProfile['playerId'] == "secondPlayer") {
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
    let playerId = playerProfile['playerId'];
    let invalid = {
      'valid': this.validForm,
      'playerId': [],
      'input': []
    }

    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          username = playerProfile['username'];
        case 1:
          age = playerProfile['age'];
        case 2:
          email = playerProfile['email'];
        case 3:
          gameExperience = playerProfile['experience'];
      }
    }

    if (typeof username == "string" && username.length >= 3 && username.length <= 25) {
      this.validForm = true;
      invalid['valid'] = this.validForm;
    } else {
      this.validForm = false;
      invalid['playerId'].push(playerId)
      invalid['input'].push(0)
    }

    if (typeof age == "number" && age > 1 && age < 100) {
      this.validForm = true;
      invalid['valid'] = this.validForm;
    }else{
      this.validForm = false;
      invalid['playerId'].push(playerId)
      invalid['input'].push(1)
    }

    if (typeof email == "string" && email.length > 5 && email.length < 255) {
      this.validForm = true;
      invalid['valid'] = this.validForm;
    }else{
      this.validForm = false;
      invalid['playerId'].push(playerId)
      invalid['input'].push(2)
    }

    if (typeof gameExperience == "number" && gameExperience > 0 && gameExperience <= 5) {
      this.validForm = true;
      invalid['valid'] = this.validForm;
    } else {
      this.validForm = false;
      invalid['playerId'].push(playerId)
      invalid['input'].push(3)
    }

    return invalid;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}