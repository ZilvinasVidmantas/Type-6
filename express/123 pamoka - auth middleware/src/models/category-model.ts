import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// collection name - "categories"
const CategoryModel = model('Category', categorySchema);

export default CategoryModel;
