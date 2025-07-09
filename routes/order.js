const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controllers/orderController');

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth, role(['customer']));

router.post('/', placeOrder);
router.get('/', getOrders);

module.exports = router;
