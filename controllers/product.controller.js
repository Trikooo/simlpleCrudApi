const Product = require("../models/product.model.js")

const getProducts = async(req, res) => {
    try{
        const products = await Product.find()
        res.status(200).send(products)
    }
    catch(error){
        res.status(500).send({msg: error})
    }

}

const getProductById = async (req, res) => {
    
    try{
        const id = req.params.id
        const product = await Product.findById(id)
        return res.status(200).send(product)      

    }
    catch(error){
        if (error.name === "CastError")
            return res.status(404).send("404 Error, user not found.")
        return res.status(500).send({misag: error})
    }
}

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).send(`product created successfully! /n ${product}`);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  }

const updateProduct = async(req, res) => {
    try{
        const { id } = req.params 
        await Product.findByIdAndUpdate(id, req.body)
        const updatedProduct = await Product.findById(id)

        return res.status(200).send(updatedProduct)
     }
    catch(error){
        if(error.name === "CastError")
            return res.status(404).send("404 not found")
        return res.status(500).send({msg: error})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        console.log(deletedProduct)
        res.status(200).send("item deleted succuesfully!")
    } catch (error) {
        if(error.name === "CastError"){
            return res.status(404).send("404 not found")
        }
        res.status(500).send(error)
    }


}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}