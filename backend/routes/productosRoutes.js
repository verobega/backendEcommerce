const express = require("express");
const router = express.Router();
const { getProductos, createProducto, updateProducto, deleteProducto } = require('../controllers/productosControllers.js');

router.route("/").get(getProductos).post(createProducto);
//router.get("/", getProductos);
//router.post("/", createProducto);

router.route("/:id").put(updateProducto).delete(deleteProducto);
//router.put("/:id", updateProducto);
//router.delete("/:id", deleteProducto);

module.exports = router