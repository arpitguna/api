const express = require('express')

const router= express.Router()

const UserCtrl = require('../controler/UserCtrl')

const passport = require('passport')

router.get('/',passport.authenticate('jwt',{failureRedirect:'/unauth'}),UserCtrl.ViewUser)
router.get('/unauth',(req,res)=>{
    return res.status(400).json({msg:'login hare!!'})
})
router.post('/insertuser',UserCtrl.InsertUser)
router.delete('/DeleteUser/:id',UserCtrl.DeleteUser)
router.get('/singleuserdata/:id',UserCtrl.SingleUserData)
router.put('/updateuser/:id',UserCtrl.UpdateUser)


router.use('/auth',require('./AuthRouter'))

module.exports = router;