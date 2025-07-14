
const express = require('express');
const path = require('path');


const app = express();


const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public_html')));


app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
    console.log('Serving files from:', path.join(__dirname, 'public_html'));
});
