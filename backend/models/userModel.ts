import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  status: string;
  confirmationCode: string;
  products: object[];
}

export interface IUser extends IUserDocument {
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser, IUserDocument>(
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
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        imageWatermark: {
          type: String,
          required: true,
        },
        brand: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
