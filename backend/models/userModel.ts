import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      Required: true,
    },
    email: {
      type: String,
      Required: true,
      unique: true,
    },
    password: {
      type: String,
      Required: true,
    },
    isAdmin: {
      type: Boolean,
      Required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model(
  'User',
  userSchema,
);

export default User;
