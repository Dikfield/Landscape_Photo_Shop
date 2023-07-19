import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  userVerification,
} from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/logout').post(logoutUser);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)  
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

router.route('/profile/:id').get(protect, getUserProfile);

router.get('/confirmation/:confirmationCode', userVerification);

export default router;
