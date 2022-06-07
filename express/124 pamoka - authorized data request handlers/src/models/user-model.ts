import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
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
        type: { type: Schema.Types.ObjectId, ref: 'Product' },
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
