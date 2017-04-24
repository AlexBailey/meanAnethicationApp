const express = require('express');
const router = express.Router();

//Register a user
router.get('/register', (req, res, next) => {
	res.send('REGISTER');
});

// Authenticate a user
router.get('/authenticate', (req, res, next) => {
	res.send('AUTHENTICATE');
});

// user profile
router.get('/profile', (req, res, next) => {
	res.send('PROFILE');
});

// validate 
router.get('/validate', (req, res, next) => {
	res.send('VALIDATE');
});

module.exports = router;