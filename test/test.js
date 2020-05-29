const assert = require("chai").assert;
const { PigGame } = require("../script");
const {
  validUserProfileProvider,
  invalidUserProfileProvider,
  btnRollProvider,
  btnHoldValidProvider,
  btnHoldInvalidProvider,
  savePlayerProvider
} = require("./providers");

describe("#pigGame", () => {
  let game = new PigGame();

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
  describe("Test btnRoll function", () =>{
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
  describe("Test btnHold function with valid data", () => {
    game.gameReady = true;
    btnHoldValidProvider.forEach((value) => {
      it(`should return nextPlyare:${value.result.nextPlayer}, if ${value.finalScore} is passsed`, () =>{
        assert.equal(
          game.btnHold(value.finalScore).nextPlayer,
          value.result.nextPlayer)
        });
    });
  });
  describe("Test btnHold function with invalid data", () => {
    game.gameReady = true;
    btnHoldInvalidProvider.forEach((value) => {
      it(`should return ${value.result}, if ${value.finalScore} is passsed`, () =>{
        assert.equal(
          game.btnHold(value.finalScore),
          value.result)
        });
    });
  });
  describe("Test savePlayer function ", () => {
    savePlayerProvider.forEach((value) => {
      it(`should return ${value.result}, if valid argument is ${value.valid}`, () =>{
        assert.equal(
          game.savePlayer(value.valid, value.playerProfile),
          value.result)
        });
    });
  });
});
