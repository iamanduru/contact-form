const express = require('express');
const app = express();  //Calls the express() function creating app object that represents the server
const path = require('path');

//Checks for PORT if there's no port it defaults to 3000
const PORT = process.env.PORT || 3000;  

/* Middleware - Executed between the request and response phases*/

app.use(express.static('public'));  //Any files in public directory can be accessed
app.use(express.json()); //Parses incoming requests with JSON payloads and makes the parsed data available in req.body

app.get('/', (req, res) => {  //Callback function req is request contains data bout clients request & res(response) used to send response back
    res.sendFile(path.join(__dirname, 'public', 'form.html')); //sends the format.html to public directory
});

app.post('/send__messages', (req, res) => {
    console.log(req.body); //JSON data sent in request which could be the name, email or message
    res.send('Data received'); //back to the client
});

app.listen(PORT, () => {  //Starts the server and listens for connections
    console.log(`Server running on Port ${PORT}`);
});