const validSet = [
    {
        username: "User#123",
        age: "50",
        email: "jone.doe@gmail.com",
        experience: "3",
    },
    {
        username: "User#123",
        age: "50",
        email:
            "contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.aig.com",
        experience: "5",
    }
];

const validSetReset = [
    {
        username: "ab!5",
        age: "1",
        email: "a@b.com",
        experience: "1",
    },
    {
        username: "User#123",
        age: "50",
        email: "jone.doe@gmail.com",
        experience: "3",
    }
];

const invalidDataLeftPlayer = [
    {
        username: "a1$",
        age: "0",
        email: "jab@c",
        experience: "0",
      },
      {
        username: "this-username-is-too-long-to-be-valid",
        age: "100",
        email: "contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longeit-could-go-on-forever.best.com",
        experience: "6",
      },
      {
        username: "1231dsgag32676dahju¤#”&”#/””””/?/",
        age: "-5",
        email: "jane.doe",
        experience: "10",
      },
      {
        username: "A!",
        age: "500",
        email: "a@b",
        experience: "#abcd",
      },
      {
        username: "A!",
        age: "10.7",
        email: "ab@c",
        experience: "10.2",
      },
      {
        username: "a1$",
        age: "0",
        email: "ab@c",
        experience: "0",
      },
]

module.exports = { validSet, validSetReset, invalidDataLeftPlayer };