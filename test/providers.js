const validUserProfileProvider = [
  {
    playerId: "firstPlayer",
    username: "User#123",
    age: 50,
    email: "jone.doe@gmail.com",
    experience: 3,
    result: true,
  },
  {
    playerId: "firstPlayer",
    username: "ab!5",
    age: 1,
    email: "a@b.com",
    experience: 1,
    result: true,
  },
  {
    playerId: "firstPlayer",
    username: "User#123",
    age: 50,
    email:
      "contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.aig.com",
    experience: 5,
    result: true,
  },
];

const invalidUserProfileProvider = [
  {
    playerId: "firstPlayer",
    username: "a1$",
    age: 0,
    email: "jab@c",
    experience: 0,
    result: false,
  },
  {
    playerId: "firstPlayer",
    username: "this-username-is-too-long-to-be-valid",
    age: 100,
    email: "a@b.c",
    experience: 1,
    result: false,
  },
  {
    playerId: "firstPlayer",
    username: "1231dsgag32676dahju¤#”&”#/””””/?/ ",
    age: -5,
    email: "jane.doe",
    experience: 10,
    result: false,
  },
];

module.exports = { invalidUserProfileProvider, validUserProfileProvider };
