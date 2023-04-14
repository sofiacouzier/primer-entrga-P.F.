import express from "express";
import ProductManager from "../Managers/ProductManager.js";


const productmanager = new ProductManager

const app = express()

app.get('/products', async (req, res) => {
    const products = await productmanager.getProducts()
    let query = req.query // encontrar el query
    let limit = Number(Object.values(query))// conseguir que numero es el limit
    //console.log(limit)
    //console.log(products)
    if (!limit) {
        res.send(products)
    } else if (limit < products.length) {
        const limitedProd = products.slice(0, limit)// slice: (de donde empieza hasta el ultimo incluido)
        return res.status(200).send(limitedProd)
    }
})

app.get('/products/:pid', async (req, res) => {
    const products = await productmanager.getProducts()
    let id = Number(Object.values(req.params))
    //console.log(id)
    const prod = await productmanager.getProductByID(id)
    // console.log(prod)
    res.send(prod)
})

app.listen(8080, () => {
    console.log('escuchado')
})

