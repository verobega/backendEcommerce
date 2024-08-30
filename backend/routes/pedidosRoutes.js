const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getPedidos, createPedido } = require('../controllers/pedidosControllers.js');

router.get("/", protect, getPedidos);
router.post("/", protect, createPedido);

module.exports = router