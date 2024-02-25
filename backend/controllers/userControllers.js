import mongoose from 'mongoose';
import { UserSchema } from '../models/Usermodel';


const User = mongoose.model('User',UserSchema);

export const addNewUser =(req,res)=>{
    let newUser =new User(req.body);

    newUser.save((err,User)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const getUser =(req,res)=>{
    User.find({},(err,User)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const getUserWithID =(req,res)=>{
    User.findById(req.params.UserId,(err,User)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const UpdateUser =(req,res)=>{

    User.findOneAndUpdate({_id: req.params.UserId},req.body,{new: true},(err,User)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const deleteUser =(req,res)=>{
    User.remove({_id: req.params.UserId},(err,User)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json({message:'successfully deleted player'});
    });
};
