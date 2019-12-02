const express = require('express');
const mongoose = require('mongoose');
const db_url = require('./dbConnection');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// Middleware
app.use((req, res, next) => {
    req.io = io;

    return next();
});

mongoose.connect(db_url, {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(require('./routes.js'));

server.listen(3000, () => {
    console.log('Server Running @localhost:3000');
});
