const express = require('express');
const dataSchema = require('./src/utils/data');
const fetch = require('node-fetch');
require('dotenv').config();
const endpoint = 'https://api.github.com/graphql';
const app = express();

const TOKEN = process.env.TOKEN;

const body = JSON.stringify(dataSchema);

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TOKEN}`,
    },
    body: body,
};

app.use(express.static('public'));

app.get('/data', (request, response) => {
    fetch(endpoint, options)
        .then((res) => res.json())
        .then((json) => response.json(json));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
