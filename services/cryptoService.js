"use strict";

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

exports.encrypt = async (text) => {
    return new Promise(async (resolve, reject) => {
        console.log("encrypt called", text);
        console.log("key", JSON.stringify(key));
        console.log("iv", JSON.stringify(iv));
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        console.log(encrypted)
        console.log("encrypt end");
        resolve({ iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') });
    });
}

exports.decrypt = async (text) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    callback(decrypted.toString());
}