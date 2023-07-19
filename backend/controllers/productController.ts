import asyncHandler from '../middleware/asyncHandler';
import Product from '../models/productModel';
import { config } from '../config/config';

const getProducts = asyncHandler(async (req: any, res: any) => {
  const pageSize = config.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .select('-imageMedium -imageLarge');
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getProductById = asyncHandler(async (req: any, res: any) => {
  const product = await Product.findById(req.params.id)
    .select('-imageMedium -imageLarge');

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

const createProduct = asyncHandler(async (req: any, res: any) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    imageSmall: '../images/sample.jpg',
    imageMedium: '../images/sample.jpg',
    imageLarge: '../images/sample.jpg',
    imageWatermark: '../images/sample.jpg',
    country: 'Sample brand',
    city: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
    tags: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req: any, res: any) => {
  const {
    name,
    price,
    description,
    imageSmall,
    imageMedium,
    imageLarge,
    imageWatermark,
    country,
    city,
    countInStock,
    tags,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    (product.name = name),
      (product.price = price),
      (product.description = description),
      (product.imageSmall = imageSmall),
      (product.imageMedium = imageMedium),
      (product.imageLarge = imageLarge),
      (product.imageWatermark = imageWatermark),
      (product.country = country),
      (product.city = city),
      (product.countInStock = countInStock),
      (product.tags = tags);

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const deleteProduct = asyncHandler(async (req: any, res: any) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

const createProductReview = asyncHandler(async (req: any, res: any) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString(),
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce(
        (acc: any, review: any) => acc + review.rating,
        0,
      ) / product.reviews.length;
    product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

const getTopProducts = asyncHandler(async (req: any, res: any) => {
  const products = await Product.find({})
    .sort({ rating: -1 })
    .limit(3);
    //.select('-imageMedium')
    //.select('-imageLarge');

  res.status(200).json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};
