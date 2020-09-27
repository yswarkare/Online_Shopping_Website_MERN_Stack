const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");
const { userAuth } = require("../utils/auth");

router.get("/get-user-orders", userAuth, async (req, res)=> {
    try {
        let orders = await Order.find({
            user: req.user._id
        }).populate("products");
        return res.status(200).json({ status: true, message: "got list of all orders", orders: orders});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});

router.get("/get-order/:order_id", userAuth, async (req, res)=> {
    try {
        let order = await Order.findOne({_id: req.params.order_id});
        return res.status(200).json({ status: true, message: "got order by id", order: order});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});

router.post("/place-order", userAuth, async (req, res) => {
    console.log(req.body);
    try {
        let newOrder = new Order({
            user: req.body.user,
            products: req.body.products,
            mrp: req.body.mrp,
            price: req.body.price,
            saving: req.body.saving,
            discount: req.body.discount,
            deliveryCharge: req.body.deliveryCharge
        });
        let order = await newOrder.save();

        // save order for user 
        let user_01 = await User.findOne({_id: req.body.user});
        let orders_01 = user_01.orders;
        orders_01.push(order._id);
        await User.findOneAndUpdate({
            _id: req.body.user
        },{
            orders: orders_01
        });
        let user = await User.findOne({_id: req.body.user});
        return res.status(200).json({ status: true, message: "got list of all orders", order: order, user: user});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});

module.exports = router;