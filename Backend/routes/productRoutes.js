import express from "express";
import asynHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc      Fetch all products
// @route     GET /api/products
// @access    Public
router.get(
  "/",
  asynHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc      Fetch single products
// @route     GET /api/products/:id
// @access    Public
router.get(
  "/:id",
  asynHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
