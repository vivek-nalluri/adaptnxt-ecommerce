const Cart = require('../models/Cart');
const Order = require('../models/Order');
const Product = require('../models/Product');

// POST /orders - Place order from cart
exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // Calculate total
  const totalPrice = cart.items.reduce((total, item) => {
    return total + item.productId.price * item.quantity;
  }, 0);

  // Create order
  const order = new Order({
    userId: req.user.id,
    items: cart.items.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity
    })),
    totalPrice
  });

  await order.save();

  // Clear cart
  cart.items = [];
  await cart.save();

  res.status(201).json({ message: 'Order placed successfully', order });
};

// GET /orders - View user's orders
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
  res.json(orders);
};
