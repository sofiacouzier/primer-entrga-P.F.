import { Router } from "express";
import CartManager from "../../Managers/CartManager.js";

const cartrouter = Router()

const cartManager = new CartManager

cartrouter.post("/", async (req, res) => {
    try {


        const result = await cartManager.createCart()

        if (result.status === 'error') return res.status(400).send({ result });

        return res.status(200).send({ result });
    } catch (error) {
        console.log(error)
    }
})

cartrouter.get("/:cid", async (req, res) => {
    let id = Number(Object.values(req.params))
    //console.log(id)
    const cart = await cartManager.getCartByID(id)
    // console.log(prod)
    res.send(cart.products)
})

cartrouter.post("/:cid/product/:pid", async (req, res) => {
    let cid = Number(Object.values(req.params.cid))
    let pid = Number(Object.values(req.params.pid))
    let quantity = Number(Object.values(req.body)) || 1
    console.log(quantity)
    const newCart = await cartManager.addProductsToCart(cid, pid, quantity)
    //console.log(newCart)
    return res.status(200).send({ newCart });
})

export default cartrouter