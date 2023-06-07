import { config } from '../config/config';
import mongoose from 'mongoose';

const db = config.DATABASE_URI!.replace(
  '<password>',
  config.DATABASE_PASSWORD!
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db);

    console.log(`Database is connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`Error: ${error.message}`);

    return process.exit(1);
  }
};

export default connectDB;
