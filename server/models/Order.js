const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
    mrp: { type: String, max: 50, trim: true },
    price: { type: String, max: 50, trim: true },
    saving: { type: String, max: 50, trim: true },
    discount: { type: String, max: 50, trim: true },
    deliveryCharge: { type: String, max: 50, trim: true },
},{
    timestamps: true
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;