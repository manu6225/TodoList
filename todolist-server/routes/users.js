var express = require('express');
var router = express.Router();
var service = require('../service/service');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('rdfgd with a resource');
});
router.get('/sendItem', function (req, res,) {   //get iems from db
  service.getItem().then(data => {
    res.send(data.data);
  })
});


router.post('/addItem', function (req, res) {  ///add items to db

  let item = req.body.item;
console.log("dey2:",item)
  service.lastOrder()
    .then(data => {
      order = (data.order) + 1
     // console.log(order)
      data = service.addTodo(order, item)
      res.send({ data})
    })

})


module.exports = router;
