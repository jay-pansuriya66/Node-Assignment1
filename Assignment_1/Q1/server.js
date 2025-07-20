const express = require('express');
const path = require('path');
const app = express();
const port = 3000; 

app.use(express.static(__dirname));

app.get('/gethello', (req, res) => {
    console.log('Received request for /gethello');
    res.send('Hello NodeJS!!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Node.js server listening at http://localhost:${port}`);
    console.log(`Open your browser and navigate to http://localhost:${port}`);
});

