const mongoose=require('mongoose')
const Schema =  mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    joinedOn:{
        type:Date,
        default:Date.now
    },
    isMentor:{
        type:Boolean,
        default:false
    },
    enrolled:[
        {
            type:Schema.Types.ObjectId,
            ref:'course'
        }
    ],

    language:{
        type:[String],
      
    },
    experience:{
        type:String,
       
    }
})

module.exports=mongoose.model('User',userSchema)