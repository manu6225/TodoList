const { todolist }=require('../model/todo');
const { use } = require('../routes/index');

function getItem(){
    console.log("gdgh");
    return todolist.find({})
    .then(data => {
        if (data) {
            console.log(data)
            return {
                
                statusCode: 200,
                data: data
            }
        }
    })

}

function addTodo(order, item) {

    const newTodo = new todolist({
        order, item
    });
    newTodo.save();

    return ({
        statusCode: 200,
        message: "Todo added"
    });
}
function lastOrder(){
    
    last = todolist.findOne().sort({ order: -1 }).select("order")
    return last


}


module.exports={
    getItem,
    addTodo,
    lastOrder
}