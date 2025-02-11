const express = require('express')

const port = 8000;

// const db = require('./confing/db')

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://arpitguna150:ARPITGUNA@cluster0.xlyzv.mongodb.net/API', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res) => {
    console.log('DB is connected');
}).catch((err) => {
    console.log('err');
})



const app = express()

const passport = require('passport')
const session = require('express-session')
const jwtpassport = require('./confing/passport_jwt')

app.use(express.urlencoded())
app.use(session({
    name:'arpit',
    secret:'AR',
    saveUninitialized:false,
    resave:false,  
    cookie:{
        maxAge:1000*60*60
    }
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/',require('./routers'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log('sever is running');
})