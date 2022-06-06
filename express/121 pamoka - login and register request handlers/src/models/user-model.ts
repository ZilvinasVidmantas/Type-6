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
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const UserModel = model('User', userSchema);

export default UserModel;