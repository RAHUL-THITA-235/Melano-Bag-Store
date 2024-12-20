const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
fullname:{
    type:String,
    minLength:3,
    trim:true
},
email:String,
password:String,
cart:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product",
    default:[]
}],

orders:[],
contact:Number,
picture:String
},{versionKey:false});



module.exports=mongoose.model('user',userSchema);