import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import User from '../models/userModel';
import { payload } from '../interfaces/jwt_token';
import { config } from '../config/config';

const protect = asyncHandler(async (req: any, res: any, next: any) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET as string);
      req.user = await User.findById((decoded as payload).userId).select(
        '-password',
      );

      next();
    } catch (error: any) {
      res.status(404);
      throw new Error('Not Authorized, token failed');
    }
  } else {
    res.status(404);
    throw new Error('Not Authorized, no token');
  }
});

const admin = (req: any, res: any, next: any) => {
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized as Admin');
  }
};

export { protect, admin };
