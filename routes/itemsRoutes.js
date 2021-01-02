var express = require('express');
var router = express.Router();
var Items = require("../model/Item");




router.get('/', async function(req, res, next) {
   let lists = await Items.find();

  res.render("Items/item-list", {lists});
});


router.get('/add', async function(req, res, next) {
  res.render("add-items");
});


router.post('/', async function(req, res, next) {
  console.log(req.body); 
  let items = new Items(req.body);
  await items.save();
  res.redirect("/itemsRoutes");
});


router.get('/delete/:id', async function(req, res, next) {
 let item = await Items.findByIdAndDelete(req.params.id);
 res.redirect("/itemsRoutes");
});

router.get('/edit/:id', async function(req, res, next) {
  let item = await Items.findById(req.params.id);

  res.render("edit-items", {item});
 });


  router.post('/update/:id', async function(req, res, next) {
    let item = await Items.findById(req.params.id);
    item.id = req.body.id;
    item.name = req.body.name;
    item.catagory = req.body.catagory;
    item.price = req.body.price;
    item.detail = req.body.detail;
    item.image = req.body.image;
    await item.save();

    res.redirect("/itemsRoutes");
  });
 

module.exports = router; 
