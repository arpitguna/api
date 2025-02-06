const { timeStamp } = require('console');
const mongoose = require('mongoose')
const { type } = require('os')

const AuthSchma = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{
    timeStamps :true
})

const Auth = mongoose.model('Auth',AuthSchma)

module.exports = Auth;