const { Router } = require("express");
const router = Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/api/products", getProducts);

router.post("/api/products", createProduct);

router.get("/api/products/:id", getProductById);

router.put("/api/products/:id", updateProduct);

router.delete("/api/products/:id", deleteProduct);
module.exports = router;
