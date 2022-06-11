const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        
        trim:true
    }, 
    emailID:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("User", userSchema);
