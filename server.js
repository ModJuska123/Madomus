const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
