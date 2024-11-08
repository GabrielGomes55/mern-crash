import express from 'express';
import Product from '../models/Product.model.js'
import mongoose from 'mongoose'
import { deleteProducts, getProducts, createProducts, updateProducts } from '../controllers/products.controller.js';

const router = express.Router();

router.get("/", getProducts)

router.post('/', createProducts)

router.put("/:id", updateProducts)

router.delete("/:id", deleteProducts)



export default router;