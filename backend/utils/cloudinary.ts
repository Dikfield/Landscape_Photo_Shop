import cloudinary from 'cloudinary';
import { config } from '../config/config';

cloudinary.v2.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_KEY,
  api_secret: config.CLOUDINARY_SECRET,
});

const uploadCloud = async (filePath: any) => {
  return await cloudinary.v2.uploader
    .upload(filePath, { transformation: [{ width: 0.5 }] })
    .then((result) => result.secure_url);
};

export default uploadCloud;
