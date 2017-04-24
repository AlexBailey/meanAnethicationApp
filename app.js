const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');

mongoose.connect(config.database);

// on connection to database
mongoose.connection.on('connected', () => {
	console.log('Connected to database '+config.database);
});

// on error when connecting to databsse
mongoose.connection.on('error', (err) => {
	console.log('Error connection to the databse: '+err);
});

const app = express();

const users = require('./routes/users');

// set number of port to run on
const port = 3000;

// cors middleware
app.use(cors());

// sets the statis folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// This is the index route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

// Initiates the server
app.listen(port, () => {
	console.log('Server started on port '+port);
});