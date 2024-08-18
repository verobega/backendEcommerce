const getProductos = (req, res) => {
    res.status(200).json({ message: `Obtener lista de productos` });
};

const createProducto = (req, res) => {
    //console.log(req.body);
    res.status(201).json({ message: `Crear nuevo producto` });
};

const updateProducto = (req, res) => {
    res.status(200).json({ message: `Producto modificado con id: ${req.params.id}` });
};

const deleteProducto = (req, res) => {
    res.status(200).json({ message: `Producto eliminado con id: ${req.params.id}` });
};

module.exports = {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
}