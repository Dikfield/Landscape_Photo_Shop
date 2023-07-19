import cloudinary from 'cloudinary';
import { config } from '../config/config';

cloudinary.v2.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_KEY,
  api_secret: config.CLOUDINARY_SECRET,
});

const uploadCloud = async (filePath: any, size: any, sizeConfig: any) => {
  console.log(size);
  if (size > 10485760) {
    sizeConfig = 0.7;
  }
  return await cloudinary.v2.uploader
    .upload(filePath, {
      transformation: [{ width: sizeConfig, crop: 'lfill' }],
    })
    .then((result) => result.secure_url);
};

export default uploadCloud;
