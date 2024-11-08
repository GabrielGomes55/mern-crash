import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const product = new Schema({
    name:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},{
    timestamps: true // createdAt, updatedAt
})

const Product = mongoose.model('Product', product);

export default Product;