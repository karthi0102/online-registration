const mongoose=require('mongoose')
const Course = require('../models/Course.js')

module.exports.getAllCourse = async(req,res)=>{
    try{
        const course=await Course.find();
        res.status(200).json(course);
    }catch(err){
        res.status(500).send("Server.error")
    }
}

module.exports.createCourse = async(req,res)=>{
    try{
        const course= new Course({...req.body});
        await course.save();
        res.status(200).json("success")
    }catch(err){

        console.log(
        err.message
        )
        res.status(500).json({msg:'internal server error'})
    }
}