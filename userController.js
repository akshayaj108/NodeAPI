const userModel = require('../models/users')

class userController{
    static userRegisteration = async (req,res) =>{
        const { username, emailID } = req.body;
    
        const user = await userModel.findOne({ emailID: emailID });
       if(user){
        res.status(401).json({"message":"Email is Already Exist !!"})
       }else{
           if(username && emailID){
                try{
                    const doc = new userModel({
                        username:username,
                        emailID:emailID
                    });
                    await doc.save();
                    res.status(200).json({"message":"Registeration Successfully"})
                }catch(error){
                    console.log(error)
                }
           }else{
               res.status(401).json({"message":"All fields are Required !!"})
           }
       }
    }
// for Get all data 
    static userRecords = async (req, res) =>{
        
       try{
           const records = await userModel.find();
           res.status(200).json({"total": records.length, records})
       }catch(err){
           console.log(err)
       }
    }
//For Search any data
static userSearch = async (req,res) =>{
   try{
    var regex = new RegExp(req.params.username, 'i')
    const results = await userModel.find({username:regex});
   
    // userModel.find({username:regex}).then((results) => res.status(200).json(results)).catch(err =>{
    //     console.log(err);
    //     res.status(401).json({"message":"Record Not Found"})
    //  } )

   if(results == 0){
    res.json({"message":"Record not Found!"})
    
   }else{
    res.status(200).json(results);    
   }
   }catch(err){
    console.log(err)
   }
}
//For Sorting data 
static userAsceSort = async (req,res) =>{
 
    try{
        
            const records = await userModel.find({}).sort({username: 1});
        res.status(200).json({"total": records.length, records})
      
        
    }catch(err){
        console.log(err)
    }
}
static userDescSort = async (req,res) =>{
    try{
        const records = await userModel.find({}).sort({username: -1});
        res.status(200).json({"total": records.length, records})
    }catch(err){
        console.log(err)
    }
}
// For User Pagination data
static userPagination = async (req,res) =>{
    try{
        const { page = 1, limit = 10 } = req.query;
        const data = await userModel.find().limit(limit *1).skip((page-1)*limit);
        res.status(200).json({"total":data.length, data});
    }catch(err){
      console.log(err)  
    }
}

}
module.exports = userController;