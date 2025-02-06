const { timeStamp } = require('console');
const mongoose = require('mongoose')
const { type } = require('os')

const UserSchma = mongoose.Schema({
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

const user = mongoose.model('user',UserSchma)

module.exports = user;