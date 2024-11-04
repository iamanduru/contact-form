const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

//Serve static files HTML, CSS, Images
app.use(express.static(path.join(__dirname, 'public')));  // Settin up Express and serve static files from the public folder

//Route for contact form
app.post('/contact', (req, res) => {  // route processes form submissions
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}) : ${message}`);
    res.send('Thank you for your message!');
});

//Start server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {  //Function starts server on localhost:3000
    console.log(`Server is running on port ${PORT}`);
});