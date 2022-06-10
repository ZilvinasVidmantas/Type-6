import {
  Schema,
  Model,
  Types,
  Document,
  model,
} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export type CartItem = {
  _id: Types.ObjectId,
  productId: Types.ObjectId,
  amount: number
};

export type CartItemProps = Omit<CartItem, '_id'>;

export type User = {
  email: string,
  password: string,
  role: 'user' | 'admin',
  cartItems: CartItem[]
  name?: string,
  surname?: string,
  img?: string,
  createdAt: string,
  updatedAt: string,
};

export type UserProps = Omit<User, 'createdAt' | 'updatedAt' | 'role' | 'cartItems'> & {
  cartItems?: CartItem[]
};

export type UserDocument = Document<Types.ObjectId, unknown, User> & User & {
  _id: Types.ObjectId;
};

const userSchema = new Schema<User, Model<User>>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  surname: String,
  img: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  cartItems: {
    type: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    }],
    default: [],
  },
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const UserModel = model('User', userSchema);

export default UserModel;
