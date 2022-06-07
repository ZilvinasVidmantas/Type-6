import { RequestHandler } from 'express';
import UserModel from '../models/user-model';
// import ProductModel from '../models/product-model';
// import UserModel from '../models/user-model';

export const getCart: RequestHandler = async (req, res) => {
  const { authUser } = req;

  res.status(200).send({
    cart: authUser.cart,
  });
};

export const addItem: RequestHandler = async (req, res) => {
  const newCartItemData = req.body;
  const { authUser } = req;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(authUser._id, {
      cart: { $push: newCartItemData },
    });

    res.status(200).json({
      data: newCartItemData,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: 'Neteisingi pridedamo produkto duomenys',
    });
  }
};

export const updateItem: RequestHandler = async (req, res) => {
  res.status(200).send('updateItem');
};

export const deleteItem: RequestHandler = async (req, res) => {
  const { itemId } = req.params;
  const user = req.authUser;
  try {
    const deletedItem = user.cart.find((cartItem) => cartItem._id.equals(itemId));
    if (deletedItem === undefined) {
      res.status(400).json({
        error: 'Nerastas pirkinių krepšelio daiktas',
      });
      return;
    }
    await user.save();
    res.status(200).json({ deletedItem });
  } catch (error) {
    res.status(400).json({
      error: 'Neteisingi pridedamo produkto duomenys',
    });
  }
};
