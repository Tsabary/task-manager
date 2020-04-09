const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yanay.tsabary@gmail.com",
    subject: "This is my first",
    text: `Welcome to the app, ${name}. Let me knw how you bla bla`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yanay.tsabary@gmail.com",
    subject: "We hate to see you go",
    text: `Oh ${name} - what have we done!!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
