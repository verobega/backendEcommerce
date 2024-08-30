const asyncHandler = require("express-async-handler");
const Pedido = require("../models/pedidosModel");

const getPedidos = asyncHandler(async (req, res) => {
    const pedidos = await Pedido.find({ user: req.user.id });
    res.status(200).json(pedidos);
});

const createPedido = asyncHandler(async (req, res) => {
    if (!req.body.nombreProducto) {
        res.status(400)
        throw new Error("Ingresa los productos");
    }
    const pedido = await Pedido.create({
        nombreProducto: req.body.nombreProducto,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        total: req.body.total,
        user: req.user._id,
    });
    res.status(201).json(pedido);
});

module.exports = {
    getPedidos,
    createPedido,
}