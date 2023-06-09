import path from 'path';
import express from 'express';
import multer from 'multer';
import waterMark from '../utils/watermarkGen';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req: any, file: any, cb: any) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

function fileFilter(req: any, file: any, cb: any) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!', false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single('image');

router.post('/', (req: any, res: any) => {
  uploadSingleImage(req, res, async function (err) {
    if (err) {
      res.status(400).send({ message: err.message });
    }

    await waterMark(
      req.file.path,
      req.file.fieldname,
      req.file.originalname,
    );

    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/${req.file.path}`,

    });
  });
});

export default router;
