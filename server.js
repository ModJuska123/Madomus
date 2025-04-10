const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to serve the favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Endpoint to handle form submission
app.post('/submit-feedback', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    res.send('Ačiū už pateiktą informaciją!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
