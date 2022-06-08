import { RequestHandler } from 'express';

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
    const productExistsInCart = authUser.cart.some(
      (cartItem) => cartItem.productId.equals(newCartItemData.productId),
    );
    if (productExistsInCart) {
      throw new Error('Toks daiktas jau yra krepšelyje');
    }
    authUser.cart.push(newCartItemData);
    await authUser.save();

    const addedCartItem = authUser.cart[authUser.cart.length - 1];

    res.status(200).json({
      cartItem: addedCartItem,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Neteisingi pridedamo produkto duomenys',
    });
  }
};

export const updateItem: RequestHandler = async (req, res) => {
  const { itemId } = req.params;
  const { authUser } = req;
  const { amount } = req.body;

  try {
    const cartItemRef = authUser.cart.find((item) => item._id.equals(itemId));

    if (cartItemRef === undefined) {
      throw new Error(`Nerastas krepšelio daiktas su tokiu id: '${itemId}'`);
    }

    cartItemRef.amount = amount;

    await authUser.save();

    res.status(200).send({
      cartItem: cartItemRef,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Neteisingi atnaujinamo produkto duomenys',
    });
  }
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

    user.cart = user.cart.filter((cartItem) => cartItem !== deletedItem);
    await user.save();
    res.status(200).json({ cartItem: deletedItem });
  } catch (error) {
    res.status(400).json({
      error: 'Neteisingi trinamo produkto duomenys',
    });
  }
};
