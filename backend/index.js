var express = require('express');
const axios = require('axios');
var cors = require('cors')
const port = 4000;

var app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.get('/users', async (req, res) => {
    try {
        // sample json consisting of array of users
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.send(response.data);
      } catch (error) {
        console.log(error);
      }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})