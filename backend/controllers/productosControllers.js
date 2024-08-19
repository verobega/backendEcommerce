const asyncHandler = require("express-async-handler");
const Producto = require("../models/productosModel");

const getProductos = asyncHandler(async (req, res) => {
    const productos = await Producto.find();
    res.status(200).json(productos);
});

const createProducto = asyncHandler(async (req, res) => {

    if (!req.body.nombre) {
        res.status(400)
        throw new Error("Ingresa el nombre del producto");

    }
    const producto = await Producto.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria
    });
    res.status(201).json(producto);
});

const updateProducto = asyncHandler(async (req, res) => {

    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(400)
        throw new Error("Producto no encontrado");
    }

    const productoUpdated = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(productoUpdated);
});

const deleteProducto = asyncHandler(async (req, res) => {

    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(400)
        throw new Error("Producto no encontrado");
    }

    await producto.deleteOne();
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
}