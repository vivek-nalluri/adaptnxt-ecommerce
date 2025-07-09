const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

// Public - view products
router.get('/', getProducts);

// Admin only - manage products
router.post('/', auth, role(['admin']), createProduct);
router.put('/:id', auth, role(['admin']), updateProduct);
router.delete('/:id', auth, role(['admin']), deleteProduct);

module.exports = router;
