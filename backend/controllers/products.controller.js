import Product from "../models/Product.model.js";
import mongoose from 'mongoose'

export const getProducts =  async(req, res)=>{
    try {
         await Product.find({}).then((products)=>{
          res.status(201).json({ success: true, data: products});    
         }) 
     } catch (error) {
         console.log("error in fetch produtcts", error)
          res.status(500).json({ succes: false, message:"Server Error"}) 
     }
}

export const createProducts =  async(req, res)=>{
    const product = req.body; // user will send this data
  
    if(!product.name || !product.price || !product.image){
         return res.status(400).json({ success: false, message:"Please provide all fields"});
    }
    const newProduct = new Product(product)
  
    try {
         await newProduct.save();
         res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
         console.error("error in create product", error.message)
         res.status(500).json({ success: false, message:"Server Error"});
    }
}

  export const updateProducts = async (req, res)=>{
    const { id } = req.params;
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product ID"})
    }

    try {
         const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true})
         res.status(200).json({success: true, message:"Prodct updated succesfully", data: product})
    } catch (error) {
         res.status(500).json({success:false, message:"Server Error"})
    }
}

export const deleteProducts =  async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Product ID"})
    }
    try {
         await Product.findByIdAndDelete(id)
         res.status(200).json({ success: true, message: "Product DELETED" })
    } catch (error) {
         console.log("error in delete product", error)
         res.status(500).json({ success: false, message:"Server Error"}) 
    }
}