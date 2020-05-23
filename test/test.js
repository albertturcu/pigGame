const assert = require("chai").assert;
const expect = require("chai").expect;
const { PigGame } = require("../script");
const {
  validUserProfileProvider,
  invalidUserProfileProvider,
} = require("./providers");

const sinon = require("sinon");

describe("#pigGame", () => {
  let game = new PigGame();

  describe("Check player profile with valid data", () => {
    validUserProfileProvider.forEach((userProfile) => {
      it(`should return ${userProfile.result}, if profile data is valid`, () => {
        assert.equal(
          game.formValidation(userProfile).valid,
          userProfile.result
        );
      });
    });
  });
  describe("Check player profile with invalid data", () => {
    invalidUserProfileProvider.forEach((userProfile) => {
      it(`should return ${userProfile.result}, if profile data is valid`, () => {
        assert.equal(
          game.formValidation(userProfile).valid,
          userProfile.result
        );
      });
    });
  });
});
