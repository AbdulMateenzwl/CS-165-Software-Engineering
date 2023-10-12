const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    dis:String,
    price:Number,
},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);