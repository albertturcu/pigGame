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
    email: "contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.best.com",
    experience: 6,
    result: false,
  },
  {
    playerId: "firstPlayer",
    username: "1231dsgag32676dahju¤#”&”#/””””/?/",
    age: -5,
    email: "jane.doe",
    experience: 10,
    result: false,
  },
  {
    playerId: "firstPlayer!",
    username: "A!",
    age: 500,
    email: "a@b",
    experience: "#abcd",
    result: false,
  },
  {
    playerId: "firstPlayer!",
    username: "A!",
    age: 10.7,
    email: "ab@c",
    experience: 10.2,
    result: false,
  },
  {
    playerId: "firstPlayer!",
    username: "a1$",
    age: 0,
    email: "ab@c",
    experience: 0,
    result: false,
  },
];

const btnRollProvider = [
  {
    dice: 1,
    secondDice: 1,
    result: "nextPlayer"
  },
  {
    dice: 1,
    secondDice: 8,
    result: 9
  },
  {
    dice: 6,
    secondDice: 5,
    result: 11
  },
  {
    dice: "abc",
    secondDice: 5,
    result: "Invalid input"
  },
  {
    dice: 5.5,
    secondDice: 2.5,
    result: "Invalid input"
  }
]

const btnHoldValidProvider = [
  {
    finalScore: 10,
    result: { nextPlayer: 0 }
  },
  {
    finalScore: 150,
    result: { nextPlayer: 0 }
  },
  {
    finalScore: 70,
    result: { nextPlayer: 0 }
  }
]
const btnHoldInvalidProvider = [
  {
    finalScore: 9,
    result: "Invalid final score"
  },
  {
    finalScore: 151,
    result: "Invalid final score"
  },
  {
    finalScore: 0,
    result: "Invalid final score"
  },
  {
    finalScore: -10,
    result: "Invalid final score"
  },
  {
    finalScore: 300,
    result: "Invalid final score"
  },
  {
    finalScore: 7.5,
    result:"Invalid final score"
  },
  {
    finalScore: "aa!bb",
    result: "Invalid final score"
  }
]

const savePlayerProvider =[
  {
    valid: true,
    playerProfile : {
      playerId :"secondPLayer",
      username :"User#123" ,
      age :50,
      email :"jone.doe@gmail.com",
      gameExperince :3 
    },
    result: "Player validated"
  },
  {
    valid: true,
    playerProfile : {
      playerId :"secondPLayer",
      username :"ab!5" ,
      age :1,
      email :"a@b.c",
      gameExperince :1
    },
    result: "Player validated"
  },
  {
    valid: true,
    playerProfile : {
      playerId :"secondPLayer",
      username :"this-is-player1-username*" ,
      age :99,
      email :"contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.aig.com",
      gameExperince :5
    },
    result: "Player validated"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"a1$" ,
      age :0,
      email :"jab@c",
      gameExperince :0
    },
    result: "Not valid player"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"this-username-is-too-long" ,
      age :100,
      email :"contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.best.com",
      gameExperince :6
    },
    result: "Not valid player"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"1231dsgag32676dahju¤#”&”#/””””/?/" ,
      age :-5,
      email :"jane.doe",
      gameExperince :10
    },
    result: "Not valid player"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"A!",
      age :500,
      email :"a@b",
      gameExperince :"#abcd"
    },
    result: "Not valid player"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"A!",
      age :10.7,
      email :"a@b",
      gameExperince :10.2
    },
    result: "Not valid player"
  },
  {
    valid: false,
    playerProfile : {
      playerId :"secondPLayer",
      username :"a1$",
      age :0,
      email :"ab@c",
      gameExperince :0
    },
    result: "Not valid player"
  }
]

module.exports = { invalidUserProfileProvider, validUserProfileProvider, btnRollProvider, btnHoldValidProvider, btnHoldInvalidProvider,savePlayerProvider };
