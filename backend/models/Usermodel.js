import mongoose from 'mongoose';

const Schema = mongoose.Schema;



export const UserSchema =new Schema({
     username:{
         type:String,
         required:true
     },
     Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});