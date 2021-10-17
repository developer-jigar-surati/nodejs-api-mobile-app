const mongoose = require("mongoose");

const moment = require('moment');
require("moment-timezone");
require('dotenv').config();

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, 'First name is requied!'] },
    last_name: { type: String, required: [true, 'Last name is requied!'] },
    email_id: { type: String, lowercase: true, required: [true, 'Email is requied!'],
        validate: {
            validator: function (v) {
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    password: { type: String, required: [true, 'Password is requied!'] },
    user_type: { type: String, default: 'user' },
    date_of_birth: { type: String, default: null, },
    gender: { type: String, default: null },
    mobile_no: { type: String, default: null,
        validate: {
            validator: function (v) {
                return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
            },
            message: props => `${props.value} is not a valid no!`
        },
    },
    profile_img: { type: String, default: null },
    
    is_social_login: { type: Boolean, default: false },
    social_type: { type: String, default: null },
    
    verify_token: { type: String, default: null },
    verify_token_expire_at: { type: String, default: null },
    is_verified: { type: Boolean, default: false },
    verify_code: { type: String, default: null },
    verified_at: { type: String, default: null },
    
    forget_token: { type: String, default: null },
    forget_token_expire_at: { type: String, default: null },

    is_active: { type: Boolean, default: true },
    created_at: { type: String, default: moment().tz(process.env.default_timezone).format() },
    updated_at: { type: String, default: null },
    deleted_at: { type: String, default: null }

});
module.exports = mongoose.model("User", userSchema);