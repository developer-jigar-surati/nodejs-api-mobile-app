"use strict";

const nodemailer = require("nodemailer");
// var sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

exports.sendEmail = async (to, subject, content, callback) => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE, // true for 465, false for other ports
        requireTLS: true,

        auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    });

    var options = {
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    }
    // let transporter = nodemailer.createTransport(sgTransport(options));

    // send mail with defined transport object
    transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`, // sender address
        to: to, // list of receivers, comma seperated if more than one
        subject: subject, // Subject line
        html: content, // html body
    }).then(res => {
        console.log("Message sent: %s", res.messageId);
        callback(null, res)
    }).catch(err => {
        console.log('email send err-------------')
        console.log(err)
        callback(err)
    });
}