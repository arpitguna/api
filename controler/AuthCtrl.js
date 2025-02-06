const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const AuthModel = require('../models/AuthModel')

module.exports.SignUp = async (req, res) => {
    try {
        let Admin = await AuthModel.find({ email: req.body.email }).countDocuments();
        if (Admin == 0) {
            if (req.body.password == req.body.conformpassword) {

                req.body.password = await bcrypt.hash(req.body.password, 10)
                let AdminData = await AuthModel.create(req.body)

                if (AdminData) {
                    return res.status(200).json({ msg: 'Admin create successfully', Data: AdminData })
                }
                else {
                    return res.status(200).json({ msg: 'admin is not create' })
                }
            }
            else {
                return res.status(200).json({ msg: 'password and conform password is not match' })
            }
        }
        else {
            return res.status(200).json({ msg: 'Email alredy exites' })
        }
    }
    catch (err) {
        return res.status(400).json({ msg: 'something wrong' })
    }
}

module.exports.login = async (req, res) => {
    try {
        let AdminData = await AuthModel.findOne({email:req.body.email})
        if(AdminData){
            let password = await bcrypt.compare(req.body.password,AdminData.password)
            if(password){
                var token = jwt.sign({Data:AdminData}, 'AR');
                return res.status(200).json({ msg: 'login successfully' ,token:token})
            }
            else{
                return res.status(200).json({ msg: 'wrong password' })
            }
        }
        else{
            return res.status(200).json({ msg: 'Data Not Found' })
        }
    }
    catch (err) {
        return res.status(400).json({ msg: 'something wrong' })
    }
}