const mongoose = require('moongose')
const {Schema}=mongoose

const courseSchema =  new Schema({
        createdBy:{
            type:Schema.Types.ObjectID,
            ref:"user"
        },
        cost:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
    videos:[
            {
                title:{
                    type:String,
                    required:true,
                },
                link:{
                    type:String,
                    required:true,
                }
            }

        ],

})

module.exports=mongoose.model('Course',courseSchema)