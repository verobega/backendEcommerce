const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { roleProtect } = require('../middleware/roleMiddleware');
const { getProductos, createProducto, updateProducto, deleteProducto } = require('../controllers/productosControllers.js');

router.route("/").get(protect, roleProtect, getProductos).post(protect, roleProtect, createProducto);
//router.get("/", getProductos);
//router.post("/", createProducto);

router.route("/:id").put(protect, roleProtect, updateProducto).delete(protect, roleProtect, deleteProducto);
//router.put("/:id", updateProducto);
//router.delete("/:id", deleteProducto);

module.exports = router