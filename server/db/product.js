const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    prod_name: String,
    prod_color: String,
    prod_category: String,
    prod_price: String
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;