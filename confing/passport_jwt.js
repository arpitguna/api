const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'AR'
}

const SignUp = require('../models/AuthModel')

passport.use(new JwtStrategy(opts, async function (payload, done) {
    let CheckUser = await SignUp.find({ email: payload.email })
    if (CheckUser) {
        return done(null, CheckUser)
    }
    else {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser(async (id, done) => {
    let userdata = await SignUp.findById(id)
    if (userdata) {
        return done(null, userdata)
    }
    else {
        return done(null, false)
    }
})

module.exports = passport;