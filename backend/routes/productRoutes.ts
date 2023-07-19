import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getHidenProductById,
} from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.get('/hiden/:id', protect, admin, getHidenProductById);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;
