const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    CreditType:String,
    CardBank:String,
    CardHolderName:String,
    CardNumber:Number,
    CardExpiry:String,
    CardCvc:Number,
},{timestamps:true});

module.exports = mongoose.model('Card',CardSchema);