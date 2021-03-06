import {
  Schema,
  Types,
  Document,
  Model,
  model,
} from 'mongoose';
import { CategoryDocument } from './category-model';

type Product = {
  title: string,
  price: number,
  amount: number,
  categories: Types.ObjectId[],
  createdAt: string,
  updatedAt: string,
};

export type ProductProps = Omit<Product, 'createdAt' | 'updatedAt' | 'categories'> & {
  categories?: string[],
};

export type ProductDocument = Document<
  Types.ObjectId,
  unknown,
  Product
> & Product & {
  _id: Types.ObjectId;
};

export type ProductPopulatedDocument = Omit<ProductDocument, 'categories'> & {
  categories: CategoryDocument[]
};

const productSchema = new Schema<Product, Model<Product>>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  categories: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  },
}, {
  timestamps: true,
});

const ProductModel = model('Product', productSchema);

export default ProductModel;
