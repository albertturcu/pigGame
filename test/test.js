const assert = require("chai").assert;
const { PigGame } = require("../script");
const {
  validUserProfileProvider,
  invalidUserProfileProvider,
  btnRollProvider,
  btnHoldValidProvider,
  btnHoldInvalidProvider,
  savePlayerProvider,
  nullValues
} = require("./providers");

describe("#pigGame", () => {
  let game = new PigGame();

  describe("Check method btn hold with null values", () => {
    nullValues.forEach((value) => {
      it(`should return invalid final score for ${value}`, () => {
        assert.isNaN(game.getRandomIntInclusive(value));
      });
    });
  });

  describe("Check method btn roll with null values", () => {
    nullValues.forEach((firstValue) => {
      nullValues.forEach((secondValue) => {
        it(`should return invalid input for ${firstValue} and ${secondValue}`, () => {
          assert.equal(game.btnRoll(firstValue,secondValue), 'Invalid input');
        });
      });
    });
  });

  describe("Check method btn hold with null values", () => {
      nullValues.forEach((value) => {
        it(`should return invalid final score for ${value}`, () => {
          assert.equal(game.btnHold(value), 'Invalid final score');
        });
      });
  });

  describe("Check method btn save player with null values", () => {
    nullValues.forEach((firstValue) => {
      nullValues.forEach((secondValue) => {
        it(`should return not valid player for ${firstValue} and ${secondValue}`, () => {
          assert.equal(game.savePlayer(firstValue,secondValue), 'Not valid player');
        });
      });
    });
  });

  describe("Check player profile with valid data", () => {
    validUserProfileProvider.forEach((userProfile) => {
      it(`should return ${userProfile.result}, if valid data provided`, () => {
        assert.equal(
          game.formValidation(userProfile).valid,
          userProfile.result
        );
      });
    });
  });
  describe("Check player profile with invalid data", () => {
    invalidUserProfileProvider.forEach((userProfile) => {
      it(`should return ${userProfile.result}, if invalid data provided`, () => {
        assert.equal(
          game.formValidation(userProfile).valid,
          userProfile.result
        );
      });
    });
  });
  describe("Check btnRoll function", () =>{
    game.gameReady = true;
    btnRollProvider.forEach((value) => {
      it(`should return ${value.result}, if ${value.dice} and ${value.secondDice} are passsed`, () =>{
        assert.equal(
          game.btnRoll(value.dice, value.secondDice),
          value.result
        )
        game.roundScore = 0;
      });
    });
  });
  describe("Check btnHold function with valid data", () => {
    game.gameReady = true;
    btnHoldValidProvider.forEach((value) => {
      it(`should return nextPlyare:${value.result.nextPlayer}, if ${value.finalScore} is passsed`, () =>{
        assert.equal(
          game.btnHold(value.finalScore).nextPlayer,
          value.result.nextPlayer)
        });
    });
  });
  describe("Check btnHold function with invalid data", () => {
    game.gameReady = true;
    btnHoldInvalidProvider.forEach((value) => {
      it(`should return ${value.result}, if ${value.finalScore} is passsed`, () =>{
        assert.equal(
          game.btnHold(value.finalScore),
          value.result)
        });
    });
  });
  describe("Check savePlayer function ", () => {
    savePlayerProvider.forEach((value) => {
      it(`should return ${value.result}, if valid argument is ${value.valid}`, () =>{
        assert.equal(
          game.savePlayer(value.valid, value.playerProfile),
          value.result)
        });
    });
  });
});
