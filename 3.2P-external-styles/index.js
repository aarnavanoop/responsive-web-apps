// 1. Import the express library
const express = require('express');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// 4. Tell the server to serve static files from the 'public_html' directory
app.use(express.static('public'));

// 5. Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
});