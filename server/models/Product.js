const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: { type: String, max: 500, trim: true, requird: true },
    brandName: { type: String, max: 500, trim: true, requird: true },
    description: { type: String, max: 2000, trim: true },
    category: { type: String, max: 500, trim: true },
    image: { type: String, max: 2000, trim: true },
    mrp: { type: String, max: 50, trim: true },
    price: { type: String, max: 50, trim: true },
    saving: { type: String, max: 50, trim: true },
    discount: { type: String, max: 50, trim: true },
    deliveryCharge: { type: String, max: 50, trim: true },
},{
    timestamps: true
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;