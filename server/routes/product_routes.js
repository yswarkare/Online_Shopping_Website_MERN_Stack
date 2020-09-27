const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/get-all", async (req, res) => {
    try {
        let products = await Product.find();
        return res.status(200).json({ status: true, message: "got list of all products", products: products});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});

router.post("/add-product", async (req, res) => {
    try {
        let newProduct = new Product({
            productName: req.body.productName,
            brandName: req.body.brandName,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
            mrp: req.body.mrp,
            price: req.body.price,
            saving: req.body.saving,
            discount: req.body.discount,
            deliveryCharge: req.body.deliveryCharge
        })
        let product = await newProduct.save();
        return res.status(200).json({ status: true, message: "new product added", product: product});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});

router.get("/get-product/:product_id", async (req, res) => {
    try {
        console.log(req.params.product_id);
        let product = await Product.findOne({_id: req.params.product_id});
        return res.status(200).json({ status: true, message: "got product", product: product});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
})

router.patch("/update-image", async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate({
            _id: req.body.product_id
        },{
            image: req.body.product_image
        });
        return res.status(200).json({ status: true, message: "prodcut image updated", product: product});
    } catch (err) {
        return res.status(403).json({ status: false, message: `${err}`, error: {err} });
    }
});


module.exports = router;