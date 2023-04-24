import express from "express";
import ProductManager from "../Managers/ProductManager.js";
import productRouter from "./routes/products.js";
import cartrouter from "./routes/cart.js";

const productmanager = new ProductManager

const app = express()
app.use(express.json())


app.use('/api/products', productRouter)
app.use('/api/cart', cartrouter)


app.listen(8080, () => {
    console.log('escuchado')
})

