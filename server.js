require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 4000;
debugger
const pusher = new Pusher({
    appId: '847445',
    key: '504e5439f5f51c617df6',
    secret: '5fb775588c39eb23541f',
    cluster: 'us3',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.post('/paint', (req, res) => {
    pusher.trigger('painting', 'draw', req.body);
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});