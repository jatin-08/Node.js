const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});


// Start the server
const port = 8000; 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
