"use strict";

require("moment-timezone");
require('dotenv').config();

const User = require("../model/users");
const emailService = require('../services/emailService');
const cryptoService = require('../services/cryptoService');
const welcomEmail = require('../templates/welcome');

const md5 = require('md5')
const moment = require('moment');
const crypto = require('crypto');
const CryptoJS = require('crypto-js');

exports.doRegister = async (req, res) => {
    try {
        console.log("doRegister start");

        const input_arr = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email_id: req.body.email_id,
            password: req.body.password,
        };

        const user = new User(input_arr);
        const errors = [];
        const err = user.validateSync();
        if (typeof err !== 'undefined') {
            for (var userVal in input_arr) {
                var errMessage = (typeof (err.errors[userVal]) !== 'undefined') ? err.errors[userVal].message : '';
                if (errMessage != '') {
                    errors.push(errMessage);
                }
            }
        }
        if (errors.length > 0) {
            console.log("Required field missing, doRegister end");

            let responseJson = { "status": "validationfailed", "message": "Required field missing!", "data": errors };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        }

        // Make sure user already exist or not
        const userData = await User.findOne({ email_id: req.body.email_id, deleted_at: null });
        if (userData === null) {
            const token = crypto.randomBytes(16).toString('hex');

            user.password = md5(req.body.password);
            user.verify_token = token;
            const savedUser = await user.save();

            const emailData = {
                name: req.body.first_name + ' ' + req.body.last_name,
                link: process.env.FRONT_URL + 'verify/email?token=' + token
            }
            const html = welcomEmail(emailData);

            emailService.sendEmail(req.body.email_id, `Welcome to ${process.env.PROJECT_NAME}`, html, (err1, mailres) => {
                if (err1) {
                    console.log("Something went wrong while sending mail.", err1);

                    user.deleted_at = moment().tz(process.env.default_timezone).format();
                    user.save();

                    let responseJson = { "status": "failed", "message": "Something went wrong while sending mail.", "data": [] };
                    let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                    res.send(encryptData.toString());
                    return;
                } else {
                    console.log(mailres);
                    console.log("Registration Successfully Done, doRegister end");

                    let responseJson = { "status": "success", "message": "Registration Successfully Done.", "data": [] };
                    let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                    res.send(encryptData.toString());
                    return;
                }
            });
        } else if (userData.is_verified === false) {
            console.log("Email " + req.body.email_id + " already exists but not verified please verify your email id, doRegister end");

            let responseJson = { "status": "failed", "message": "Email " + req.body.email_id + " already exists but not verified please verify your email id", "data": [] };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        } else {
            console.log("Email " + req.body.email_id + " already exists, doRegister end");

            let responseJson = { "status": "failed", "message": "Email " + req.body.email_id + " already exists.", "data": [] };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        }
    } catch (error) {
        console.log("doRegister end with error", error.message);

        let responseJson = { "status": "failed", "message": "Something went wrong while registration!", "data": error.message };
        let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
        res.send(encryptData.toString());
        return;
    }
}

exports.verifyEmail = async (req, res) => {
    try {
        console.log("verifyEmail start");

        let token = req.body.token;

        if (typeof token !== 'undefined' && token !== null && token !== '') {
            const users = await User.findOne({ verify_token: token });
            if (users === null) {
                console.log("Invalid token please try again, verifyEmail end");

                let responseJson = { "status": "failed", "message": "Invalid token please try again!", "data": [] };
                let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                res.send(encryptData.toString());
                return;
            } else {
                users.verified_at = moment().tz(process.env.default_timezone).format();
                users.is_verified = true;
                users.save();

                console.log("verifyEmail end");

                let responseJson = { "status": "success", "message": "Thank you for verifying your email address! Congratulations, you're now a part of <strong>" + process.env.PROJECT_NAME + "!</strong> Enjoy!", "data": [] };
                let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                res.send(encryptData.toString());
                return;
            }
        } else {
            console.log("Token is requied, verifyEmail end");

            let responseJson = { "status": "failed", "message": "Token is requied!", "data": [] };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        }
    } catch (error) {
        console.log("verifyEmail end with error", error.message);

        let responseJson = { "status": "failed", "message": "Something went wrong while verifying email!", "data": error.message };
        let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
        res.send(encryptData.toString());
        return;
    }
}

exports.doLogin = async (req, res) => {
    try {
        console.log("doLogin start");

        const userData = {
            email_id: req.body.email_id,
            password: req.body.password,
        };

        const user = new User(userData);

        const errors = [];
        const err = user.validateSync();
        if (typeof err !== 'undefined') {
            for (var userVal in userData) {
                var errMessage = (typeof (err.errors[userVal]) !== 'undefined') ? err.errors[userVal].message : '';
                if (errMessage != '') {
                    errors.push(errMessage);
                }
            }
        }
        if (errors.length > 0) {
            console.log("Required field missing, doLogin end");

            let responseJson = { "status": "validationfailed", "message": "Required field missing!", "data": errors };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        }

        const users = await User.findOne({ email_id: req.body.email_id, password: req.body.password, deleted_at: null });

        if (users === null) {
            console.log("Invalid Credentials, doLogin end");

            let responseJson = { "status": "failed", "message": "Invalid Credentials!", "data": [] };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        } else {
            if (!users.is_verified) {
                console.log("Please verify your email first, doLogin end");

                let responseJson = { "status": "failed", "message": "Please verify your email first!", "data": [] };
                let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                res.send(encryptData.toString());
                return;
            }

            if (users.is_active) {
                console.log("Login successfully done, doLogin end");

                let newUserData = getUserData(users);

                let responseJson = { "status": "success", "message": "Login successfully done.", "data": newUserData };
                let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                res.send(encryptData.toString());
                return;
            } else {
                console.log("User is inactive, doLogin end");

                let responseJson = { "status": "failed", "message": "User is inactive!", "data": [] };
                let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
                res.send(encryptData.toString());
                return;
            }
        }
    } catch (error) {
        console.log("doLogin end with error", error.message);

        let responseJson = { "status": "failed", "message": "Something went wrong while login", "data": error.message };
        let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
        res.send(encryptData.toString());
        return;
    }
}

exports.getUserData = async (req, res) => {
    try {
        console.log("getUserData start");
        
        var decrypted = CryptoJS.TripleDES.decrypt(req.body.email_id, process.env.ENCRYPTION_SECRET_KEY);
        var resData = decrypted.toString(CryptoJS.enc.Utf8);
        
        console.log("decrypted Email", resData);
        
        const userData = await User.findOne({ email_id: resData, deleted_at: null, is_active: true });
        if (userData) {
            let newUserData = getUserData(userData);

            let responseJson = { "status": "success", "message": "Get user data.", "data": newUserData };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        } else {
            let responseJson = { "status": "failed", "message": "User not found", "data": [] };
            let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
            res.send(encryptData.toString());
            return;
        }

    } catch (error) {
        console.log("getUserData end with error", error.message);

        let responseJson = { "status": "failed", "message": "Something went wrong while get user data", "data": error.message };
        let encryptData = CryptoJS.TripleDES.encrypt(JSON.stringify(responseJson), process.env.ENCRYPTION_SECRET_KEY);
        res.send(encryptData.toString());
        return;
    }
}

let getUserData = (users) => {
    let newUserData = {
        // _id: users._id,
        first_name: users.first_name,
        last_name: users.last_name,
        email_id: users.email_id,
        user_type: users.user_type,
        profile_img: users.profile_img,
        mobile_no: users.mobile_no,
        gender: users.gender,
        date_of_birth: users.date_of_birth,
    }
    return newUserData;
}