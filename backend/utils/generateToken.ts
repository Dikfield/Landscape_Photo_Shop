import { config } from '../config/config';
import { payload } from '../interfaces/jwt_token';
import jwt from 'jsonwebtoken';

const generateToken = (res: any, userId: string) => {
  const payload: payload = { userId };

  const token = jwt.sign(payload, config.JWT_SECRET as string, {
    expiresIn: '1d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: config.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
