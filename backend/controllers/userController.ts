import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/asyncHandler';
import UserModel from '../models/userModel';
import generateToken from '../utils/generateToken';
import { config } from '../config/config';
import { sendConfirmationEmail } from '../utils/nodemailer.config';

const authUser = asyncHandler(async (req: any, res: any) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    if (user.status !== 'Active') {
      return res.status(401).send({
        message: 'Pending account. Please verify your email',
      });
    }
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      buyedPhotos: user.buyedPhotos,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const emailToken = jwt.sign(
    { email },
    config.NODEMAIL_EMAIL_SECRET as string,
  );

  const user = await UserModel.create({
    name,
    email,
    password,
    confirmationCode: emailToken,
  });

  if (user) {
    //generateToken(res, user._id);
    await sendConfirmationEmail(user.name, user.email, emailToken);
    res.status(201).json({
      message: 'User was registered successfully! please check your email',
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      status: 'Pending',
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const logoutUser = asyncHandler(async (req: any, res: any) => {
  res.cookie('jwt', '', {
    httOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logged out successfully' });
});

const getUserProfile = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUserProfile = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getUsers = asyncHandler(async (req: any, res: any) => {
  const users = await UserModel.find({});
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findById(req.params.id).select('-password');

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const deleteUser = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Cannot delete admin user');
    }

    await UserModel.deleteOne({ _id: user._id });
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const updateUser = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

const userVerification = asyncHandler(async (req: any, res: any) => {
  const user = await UserModel.findOne({
    confirmationCode: req.params.confirmationCode,
  });

  if (user) {
    user.status = 'Active';
    user.confirmationCode = '';
    await user.save();

    return res.status(200).json({ message: 'User registered' });
  }

  res
    .status(404)
    .json({ message: 'Code not found or user already registered' });
});

export {
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
};
