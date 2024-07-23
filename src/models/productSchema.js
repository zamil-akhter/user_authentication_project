const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName : {
    type : String,
    default : null,
  },
  productImage : {
    type : String,
    default : null,
  },
},{timestamps : true});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;