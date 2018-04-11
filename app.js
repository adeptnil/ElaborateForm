const express = require('express');
const app = express();
const appName = "ContactInfoForm";
const hostname = "localhost";
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port, hostname, () => {
    console.log(`${appName} server running at http://${hostname}:${port}/`);
});