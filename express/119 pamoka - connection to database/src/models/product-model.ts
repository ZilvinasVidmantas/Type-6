import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: String,
  price: Number,
  amount: Number,
}, {
  timestamps: true,
});

// collection name - "products"
const ProductModel = model('Product', productSchema);

export default ProductModel;