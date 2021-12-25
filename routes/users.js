"use strict";

//Import Controllers
const userController = require('../controllers/userController');

module.exports = (app) => {
	app.post('/do-register', userController.doRegister);
	
	app.post('/verify-email', userController.verifyEmail);
	
	app.post('/forgotpassword', userController.forgotPassword);
	
	app.post('/do-login', userController.doLogin);
	
	app.post('/get-user', userController.getUserData);
};