import Jimp from 'jimp';
import * as path from 'path';

async function waterMark(
  standardImage: any,
  fieldName: any,
  originalname: any,
) {
  // reads the watermark image
  let watermark = await Jimp.read('images/watermark_cover.jpg');
  // resizes the watermark image
  watermark = watermark.cover(1200,1200);
  // reads the image
  const image = await Jimp.read(standardImage);
  //adds the watermark to the image at point 0, 0
  watermark = await watermark;
  image.composite(watermark, 0, 0, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 0.5,
  });
  //Saves the image into the file system

  const filePath = standardImage.replace('/uploads', '');

  await image.writeAsync('watermark/' + filePath);

  return filePath;
}

export default waterMark;
