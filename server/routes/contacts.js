const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();
const userSocietes = require("../models/userSocietes")


//Methode_Post
Router.post("/", async (req,res)=> {
    try {
        const UserSocietes = new userSocietes(req.body);
       const response =  await UserSocietes.save();
       res.send (response);
}  catch (error) {
    res.status(400).send({message : "can not save it"});
}
});

//Methode_Get_all
Router.get("/", async (req,res)=> {
    try {
        const result= await userSocietes.find();
        res.send({ response : result , message : "getting contacts successfuly"});
    } catch (error) {
        res.status(400).json({message : "can not get contacts"});
    }
    });

 //Methode_Get
 Router.get("/:id", async (req,res)=> {
    try {
        const result= await userSocietes.findOne({_id: req.params.id});
        res.send({ response : result, message : "getting contact successfuly"});
    } catch (error) {
        res.status(400).send({message : "there is no contact with this id"});
    }
    });



 //Methode_delete

 Router.delete("/:id", async (req,res)=> {
    try {
        const result= await userSocietes.deleteOne({_id: req.params.id});
        res.send({ response : result, message : "deleted"});
    } catch (error) {
        res.status(400).send({message : "not deleted"});
    }
    });
 //Methode_put
  
 Router.put("/:id", async (req,res)=> {
    try {
        const result= await userSocietes.updateOne({_id: req.params.id}, {$set: {...req.body}});
        res.send({ response : result, message : "updated"});
    } catch (error) {
        res.status(400).send({message : "not updated"});
    }
    });


        
module.exports = Router;