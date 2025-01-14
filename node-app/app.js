// node-app/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send(`Hello from Docker container!`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
