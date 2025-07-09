const Cart = require('../models/Cart');
const mongoose = require('mongoose');

// GET /cart - View cart
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
  if (!cart) return res.json({ items: [] });
  res.json(cart);
};

// POST /cart - Add item
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({ userId: req.user.id, items: [{ productId, quantity }] });
  } else {
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
  }

  await cart.save();
  res.json(cart);
};

// PUT /cart - Update quantity
exports.updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  const item = cart.items.find(item => item.productId.toString() === productId);
  if (item) {
    item.quantity = quantity;
    await cart.save();
    return res.json(cart);
  }

  res.status(404).json({ message: 'Item not found' });
};

// DELETE /cart/:productId - Remove item
exports.removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
  await cart.save();

  res.json(cart);
};
