var mongoose = require("mongoose");

var items_Schema = mongoose.Schema({
    id:String,
    name:String,
    catagory:String,
    price:String,
    details:String,
    image:String,
});

const Items = mongoose.model("Items", items_Schema);
module.exports = Items;

