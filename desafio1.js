class ProductManager {
    constructor() {
        this.products = []
    }
    //metodos

    addProducts = (title, description, price, thumbnail, code, stock) => {


        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        const validateCode = this.products.find(e => e.code == code)



        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("debe incluir todos los parametros")
        } else if (validateCode) {
            console.log("no puede repetir el codigo")
        } else {
            this.products.push(product);
        }
    }

    getProducts = () => {
        return this.products
    }

    getProductByID = (id) => {
        if (!id) {
            console.log("debe ingresar un id")
        } else {
            if (this.products.find(product => product.id == id)) {
                console.log("existe el producto")
            } else {
                console.error("not found")
            }
        }

    }

}


const prueba = new ProductManager();


prueba.addProducts("uno", "el primero", 100, "www.algo.com", 123, 7);
prueba.addProducts("uno", "el primero", "www.algo.com", 123, 7); //no puedo saltear un parametro
prueba.addProducts("uno", "el primero", 100, "www.algo.com", 123, 7); //no puedo repetir code
prueba.addProducts("dos", "el segundo", 160, "www.algo.com", 193, 99)

console.log(prueba.getProducts())

prueba.getProductByID(1)