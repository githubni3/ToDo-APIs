import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
export const User = mongoose.model("Users",userSchema);