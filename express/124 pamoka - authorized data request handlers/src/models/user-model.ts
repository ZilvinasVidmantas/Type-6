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

export type User = {
  email: string,
  password: string,
  role: 'user' | 'admin',
  cart: CartItem[]
  name?: string,
  surname?: string,
  img?: string,
};

export type UserDocument = (Document<unknown, any, User> & User & {
  _id: Types.ObjectId;
});

type UserModelType = Model<User>;

const userSchema = new Schema<User, UserModelType>({
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
  cart: {
    type: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        unique: true,
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
