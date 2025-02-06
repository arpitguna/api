const express = require('express')

const router = express.Router()

const AuthCtrl = require('../controler/AuthCtrl')

router.post('/signup',AuthCtrl.SignUp)
router.post('/login',AuthCtrl.login)


module.exports = router;