const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/productos', require('./routes/productosRoutes'));

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
