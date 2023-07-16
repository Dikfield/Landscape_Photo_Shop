import Jimp from 'jimp';

async function waterMark(file: any) {
  // reads the image
  const image = await Jimp.read(file);
  // reads the watermark image
  let watermark = await Jimp.read('images/watermark_cover.jpg');
  // resizes the watermark image
  watermark = watermark.resize(image.bitmap.width, image.bitmap.height);
  //adds the watermark to the image at point 0, 0
  const watermarkImage = image.composite(watermark, 0, 0, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 0.5,
  });
  //Saves the image into the file system

  const filePath = 'w' + file;
  await watermarkImage.writeAsync(filePath);

  return filePath;
}

export default waterMark;
