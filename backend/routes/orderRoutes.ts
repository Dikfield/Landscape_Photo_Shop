import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderbyId,
  updateOrderToPay,
  updateToDelivered,
  getOrders,
} from '../controllers/orderController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderbyId);
router.route('/:id/pay').put(protect, updateOrderToPay);
router.route('/:id/deliver').put(protect, updateToDelivered);

export default router;
