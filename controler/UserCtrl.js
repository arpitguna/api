const UserModel = require('../models/UserModel') 

module.exports.ViewUser = async(req,res)=>{
    try{
        let UserData = await UserModel.find()
        return res.status(200).json({msg:'View UserData',user:UserData})
    }
    catch(err){
        return res.status(400).json({msg:'something wrong'})
    }
}

module.exports.InsertUser = async(req,res)=>{
    try{
        let UserData = await UserModel.create(req.body)
        if(UserData){
            return res.status(200).json({msg:'insert user successfully',user:UserData})
        }
        else{
            return res.status(200).json({msg:'User is Not Insert'})
        }

    }
    catch(err){
        return res.status(400).json({msg:'something wrong'})
    }
}

module.exports.DeleteUser = async(req,res)=>{
    try{
        let DeleteUser = await UserModel.findByIdAndDelete(req.params.id)
        if(DeleteUser){
            return res.status(200).json({msg:'Delete user successfully'})
        }
        else{
            return res.status(200).json({msg:'Data is Not Found'})
        }
    }
    catch(err){
        return res.status(400).json({msg:'something wrong'})
    }
}

module.exports.SingleUserData =async(req,res)=>{
    try{
        let SingleUserData = await UserModel.findById(req.params.id)
        return res.status(200).json({msg:'user data',Data:SingleUserData})
    }
    catch(err){
        return res.status(400).json({msg:'something wrong'})
    }
}

module.exports.UpdateUser =async(req,res)=>{
    try{
        let UpadatedData = await UserModel.findByIdAndUpdate(req.params.id,req.body)
        if(UpadatedData){
            UpadatedData = await UserModel.findById(req.params.id)
            return res.status(200).json({msg:'User Data Updated',Data:UpadatedData})
        }
        else{
            return res.status(200).json({msg:'User Data Not Update'})
        }
    }
    catch(err){
        return res.status(400).json({msg:'something wrong'})
    }
}

