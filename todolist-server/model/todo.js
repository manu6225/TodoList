const mongoose=require('mongoose')
const todolist=mongoose.model("todolist",{
    order:Number,
    item:String
});

module.exports={
    todolist
};